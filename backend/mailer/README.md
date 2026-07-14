# Contact form mailer

Receives the contact form's `POST /api/contact-form` (proxied by Caddy,
same-origin — see the `reverse_proxy` line manually added to
`/etc/caddy/sites/sv-zvartnots.com` on the server) and emails the
submission to `leasing@sv-zvartnots.com` via that mailbox's own SMTP.

This exists because the site is a static deploy with no application
server, and the mailbox only had a password — no SMTP host/port were
known up front. Those turned out to be `mail.hosting.reg.ru:465` (found
via the domain's MX records, which point at REG.RU hosting).

## Where it actually runs

Not on this repo's deploy pipeline — `node deploy.js` only ships the
static site (this `backend/` folder is explicitly excluded, see
`STATIC_IGNORE_ROOT` in `deploy.js`, so it's never served publicly).

The live copy lives directly on the deploy server (same host as
`DEPLOY_HOST` in `.env`), at:

```
/home/deploy/sv-zvartnots-mailer/
├── mailer.py       (this file)
├── watchdog.sh     (this file)
├── .env            (real credentials — SERVER ONLY, never in git)
├── mailer.pid
├── mailer.log        — request/send log
└── submissions.log   — durable record of every real submission
                        (received/sent/send_failed), independent of
                        whether the SMTP send actually succeeds
```

**Credentials** (`SMTP_PASS` for `leasing@sv-zvartnots.com`) exist only
in that server-side `.env`. They were never written to this repo or to
the project's local `.env` — only used transiently while setting this
up. Copy `.env.example` there and fill in `SMTP_PASS` if it's ever lost.

## Why no systemd service

The `deploy` user only has narrowly-scoped passwordless sudo (Caddy
config writes + reload/restart — see `sudo -l`), not general root, so a
proper systemd unit isn't available. Instead:

- `mailer.py` runs as a plain background process (`nohup`), bound to
  `127.0.0.1` only (Caddy proxies to it; not reachable directly).
- `watchdog.sh` is installed in the `deploy` user's own crontab
  (`crontab -l`), running every minute: if the PID in `mailer.pid` isn't
  alive, it restarts the process. A `@reboot` entry does the same after
  a server restart.

This means recovery from a crash takes up to ~60s, not instant — fine
for a low-traffic contact form.

## Redeploying after editing mailer.py

There's no automated deploy for this piece. After changing
`backend/mailer/mailer.py` here, manually:

1. Upload the new file to `/home/deploy/sv-zvartnots-mailer/mailer.py`
   on the server (SSH, using the same `DEPLOY_HOST`/`DEPLOY_USER`/
   `DEPLOY_PASSWORD` from this project's `.env`).
2. Kill the running process (`cat mailer.pid` → `kill <pid>`) and run
   `./watchdog.sh` once to start the new version immediately (otherwise
   it'll pick it up within a minute on its own via cron, but the OLD
   process would keep serving stale code until then).

## Debugging a missing submission

Check `submissions.log` first — every real (non-honeypot) submission is
recorded there as soon as it's received, before the SMTP attempt, and
again after with `sent` or `send_failed: <error>`. If a lead shows
`"outcome": "sent"` but never arrived in the inbox, that's a delivery
issue on the mail host's side (observed once, intermittently, with no
error — the SMTP server accepted the message but it never reached
INBOX/Junk/Sent/Trash) rather than a bug here; `mailer.py` already
retries the send 3× before giving up.
