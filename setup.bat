@echo off
setlocal

:: Check if winget is available
where winget >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo winget is not available. Please install winget or use a compatible shell.
    exit /b 1
)

:: Install fnm using winget
echo Installing fnm...
winget install Schniz.fnm -e --silent

:: Set environment for fnm
for /f "tokens=*" %%i in ('fnm env --use-on-cd') do (set "%%i")

:: Download and install Node.js version 22
echo Downloading and installing Node.js version 22...
fnm use --install-if-missing 22

:: Verify the installed Node.js version
echo Verifying Node.js version...
node -v

:: Verify the installed NPM version
echo Verifying NPM version...
npm -v

:: Install npm packages
echo Installing npm packages...
npm install @material-ui/core @material-ui/icons react-use react-big-calendar moment moment-timezone axios file-saver electron

echo All dependencies are installed.
endlocal
