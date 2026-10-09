@echo off
setlocal
cd /d "%~dp0"
set "EDGE_EXE=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
set "COURSE_URL=http://127.0.0.1:8766/?v=20261009-learning-v7"

powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0ensure_course_server.ps1"
if errorlevel 1 (
  echo 课程服务器启动失败。请不要移动课程文件夹，并确认 Python 可以使用。
  pause
  exit /b 1
)

if exist "%EDGE_EXE%" (
  start "" "%EDGE_EXE%" "%COURSE_URL%"
  exit /b 0
)

start "" "%COURSE_URL%"
