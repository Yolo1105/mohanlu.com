#!/bin/bash

# Detect operating system
OS="$(uname -s)"
echo "Operating System detected: $OS"

# Install fnm and Node.js based on OS
case "$OS" in
    Linux* | Darwin*)  # For Linux and macOS
        echo "Installing fnm for Linux/macOS..."
        curl -fsSL https://fnm.vercel.app/install | bash
        export PATH="$HOME/.fnm:$PATH"
        eval "$(fnm env)"
        ;;

    CYGWIN* | MINGW* | MSYS*)  # For Windows environments using Git Bash
        echo "Installing fnm for Windows using Git Bash..."
        curl -fsSL https://fnm.vercel.app/install | bash
        export PATH="$HOME/.fnm:$PATH"
        eval "$(fnm env)"
        ;;

    *) 
        echo "Using winget to install fnm on Windows..."
        if ! command -v winget &> /dev/null; then
            echo "winget is not available. Please install winget or use Git Bash."
            exit 1
        fi
        winget install Schniz.fnm
        eval "$(fnm env --use-on-cd)"
        ;;
esac

# Download and install Node.js version 22
fnm use --install-if-missing 22

# Verify the installed Node.js and NPM versions
node -v  # should print `v22.x.x`
npm -v   # should print `10.x.x`

# Install npm packages
echo "Installing npm packages..."
npm install @material-ui/core @material-ui/icons react-use react-big-calendar moment moment-timezone axios file-saver electron

echo "All dependencies are installed."
