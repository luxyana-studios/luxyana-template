#!/bin/bash
# Warn if a command looks like it's trying to use Expo Go.
# This project uses Nitro Modules (Unistyles v3, MMKV v4) which require development builds.

INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

# Check for explicit --go flag or npx expo start with no run: prefix
if [[ "$COMMAND" == *"--go"* ]] || [[ "$COMMAND" == *"expo go"* ]]; then
  echo "BLOCKED: This project cannot run in Expo Go — it uses Nitro Modules (Unistyles v3, MMKV v4) which require custom native code. Use 'npx expo run:android' or 'npx expo run:ios' for development builds." >&2
  exit 2
fi

exit 0
