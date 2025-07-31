#!/bin/bash
cd /home/kavia/workspace/code-generation/secure-online-banking-platform-8576/netbanking_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

