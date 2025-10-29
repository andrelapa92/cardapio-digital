#!/usr/bin/env bash
# wait-for-it.sh — espera um host:porta ficar disponível

set -e

host=$(echo "$1" | cut -d: -f1)
port=$(echo "$1" | cut -d: -f2)
shift
timeout=15

while ! nc -z "$host" "$port"; do
  echo "Aguardando $host:$port..."
  sleep 1
  timeout=$((timeout - 1))
  if [ $timeout -eq 0 ]; then
    echo "Timeout esperando $host:$port"
    exit 1
  fi
done

echo "$host:$port disponível, iniciando aplicação..."
exec "$@"
