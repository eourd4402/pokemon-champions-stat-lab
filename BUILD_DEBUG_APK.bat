@echo off
cd /d "%~dp0"
call npm install
if errorlevel 1 pause & exit /b 1
call npx cap sync android
if errorlevel 1 pause & exit /b 1
cd android
call gradlew.bat assembleDebug
if errorlevel 1 pause & exit /b 1
echo.
echo APK: android\app\build\outputs\apk\debug\app-debug.apk
pause
