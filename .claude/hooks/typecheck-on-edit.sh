#!/bin/bash
# Run typecheck after editing TypeScript files to catch errors early.

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

if [[ "$FILE_PATH" == *.ts ]] || [[ "$FILE_PATH" == *.tsx ]]; then
  OUTPUT=$(npx tsc --noEmit 2>&1)
  EXIT_CODE=$?

  if [ $EXIT_CODE -ne 0 ]; then
    echo "$OUTPUT"
    # Don't block — just surface the errors as context
    exit 0
  fi
fi

exit 0
