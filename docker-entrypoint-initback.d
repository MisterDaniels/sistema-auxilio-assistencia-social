#!/bin/bash
set -e

echo "[Entrypoint] Node Docker Image"

npm install && npm db:config && npm start