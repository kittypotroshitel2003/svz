#!/bin/bash
DIR="/home/deploy/sv-zvartnots-mailer"
PIDFILE="$DIR/mailer.pid"
LOGFILE="$DIR/mailer.log"

if [ -f "$PIDFILE" ] && kill -0 "$(cat "$PIDFILE" 2>/dev/null)" 2>/dev/null; then
  exit 0
fi

cd "$DIR" || exit 1
set -a
. ./.env
set +a
nohup /usr/bin/python3 mailer.py >> "$LOGFILE" 2>&1 &
echo $! > "$PIDFILE"
