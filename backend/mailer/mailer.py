#!/usr/bin/env python3
import json
import os
import smtplib
import ssl
import time
from datetime import datetime, timezone
from email.mime.text import MIMEText
from email.utils import formatdate
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

SMTP_HOST = os.environ.get("SMTP_HOST", "mail.hosting.reg.ru")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "465"))
SMTP_USER = os.environ["SMTP_USER"]
SMTP_PASS = os.environ["SMTP_PASS"]
MAIL_TO = os.environ.get("MAIL_TO", SMTP_USER)
LISTEN_PORT = int(os.environ.get("LISTEN_PORT", "8721"))
MAX_BODY = 20_000
RATE_LIMIT_SECONDS = 8
SEND_RETRIES = 3
SEND_RETRY_DELAY = 3  # seconds between attempts

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
SUBMISSIONS_LOG = os.path.join(SCRIPT_DIR, "submissions.log")

_last_submit = {}

FIELD_LABELS = {"name": "Имя", "company": "Компания", "phone": "Телефон"}


def record_submission(fields, outcome):
    """Durable local record of every real submission, independent of whether
    the SMTP send actually succeeds — so a dropped/lost send is recoverable."""
    line = {
        "ts": datetime.now(timezone.utc).isoformat(),
        "outcome": outcome,
        "fields": {k: fields.get(k, "") for k in ("name", "company", "phone")},
    }
    try:
        with open(SUBMISSIONS_LOG, "a", encoding="utf-8") as f:
            f.write(json.dumps(line, ensure_ascii=False) + "\n")
    except Exception as e:
        print(f"[mailer] failed to write submissions log: {e!r}", flush=True)


def build_message(fields):
    lines = []
    for key in ("name", "company", "phone"):
        val = (fields.get(key) or "").strip()
        if val:
            lines.append(f"{FIELD_LABELS[key]}: {val}")
    body = "\n".join(lines) if lines else "(без данных)"

    msg = MIMEText(body, "plain", "utf-8")
    msg["Subject"] = "Новая заявка — Smart Valley Zvartnots"
    msg["From"] = SMTP_USER
    msg["To"] = MAIL_TO
    msg["Date"] = formatdate(localtime=True)
    return msg


def send_mail(fields):
    msg = build_message(fields)
    last_err = None
    for attempt in range(1, SEND_RETRIES + 1):
        try:
            ctx = ssl.create_default_context()
            with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT, timeout=15, context=ctx) as s:
                s.login(SMTP_USER, SMTP_PASS)
                refused = s.sendmail(SMTP_USER, [MAIL_TO], msg.as_string())
                if refused:
                    raise smtplib.SMTPRecipientsRefused(refused)
            print(f"[mailer] send OK (attempt {attempt})", flush=True)
            return
        except Exception as e:
            last_err = e
            print(f"[mailer] send attempt {attempt} failed: {e!r}", flush=True)
            if attempt < SEND_RETRIES:
                time.sleep(SEND_RETRY_DELAY)
    raise last_err


class Handler(BaseHTTPRequestHandler):
    server_version = "svz-mailer/1.1"

    def _send_json(self, status, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self):
        if self.path.rstrip("/") != "/api/contact-form":
            self._send_json(404, {"success": False, "message": "not found"})
            return

        length = int(self.headers.get("Content-Length", 0) or 0)
        if length <= 0 or length > MAX_BODY:
            self._send_json(400, {"success": False, "message": "bad request"})
            return
        raw = self.rfile.read(length)

        try:
            data = json.loads(raw.decode("utf-8"))
        except Exception:
            self._send_json(400, {"success": False, "message": "invalid json"})
            return

        # Honeypot: bots tend to fill every field; humans never see/fill this one.
        if data.get("botcheck"):
            self._send_json(200, {"success": True})
            return

        name = (data.get("name") or "").strip()
        phone = (data.get("phone") or "").strip()
        if not name or not phone:
            self._send_json(400, {"success": False, "message": "missing fields"})
            return

        ip = self.client_address[0]
        now = time.time()
        if now - _last_submit.get(ip, 0) < RATE_LIMIT_SECONDS:
            self._send_json(429, {"success": False, "message": "too many requests"})
            return
        _last_submit[ip] = now

        # Record BEFORE attempting to send, so we never lose the lead data
        # even if every SMTP retry fails or the process dies mid-send.
        record_submission(data, "received")

        try:
            send_mail(data)
        except Exception as e:
            print(f"[mailer] send failed after retries: {e!r}", flush=True)
            record_submission(data, f"send_failed: {e!r}")
            self._send_json(502, {"success": False, "message": "mail send failed"})
            return

        record_submission(data, "sent")
        self._send_json(200, {"success": True})

    def log_message(self, fmt, *args):
        print(f"[mailer] {self.address_string()} - {fmt % args}", flush=True)


def main():
    server = ThreadingHTTPServer(("127.0.0.1", LISTEN_PORT), Handler)
    print(f"[mailer] listening on 127.0.0.1:{LISTEN_PORT}", flush=True)
    server.serve_forever()


if __name__ == "__main__":
    main()
