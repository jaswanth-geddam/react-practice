@echo off
cd /d "%~dp0"

echo ============================================
echo  React Practice - Workspace Mode
echo  (single install at root level)
echo ============================================
echo.

:MENU
echo Available commands:
echo.
echo  i. Install all (single npm install at root)
echo  r. Run a sub-project
echo  f. Format code
echo  l. List projects
echo  0. Exit
echo.
set /p r=Choose: 

if "%r%"=="0" exit /b
if /i "%r%"=="i" goto INSTALL
if /i "%r%"=="r" goto RUN
if /i "%r%"=="f" goto FORMAT
if /i "%r%"=="l" goto LIST
goto MENU

:INSTALL
echo Installing...
call npm install
echo Done!
pause
goto MENU

:RUN
cls
echo ============================================
echo  Select a project to start
echo ============================================
echo.
echo  1.  action-reducer
echo  2.  auth-context
echo  3.  c4
echo  4.  context
echo  5.  e2
echo  6.  employee-app/employee
echo  7.  falcon
echo  8.  jaswant
echo  9.  music
echo 10.  react-1
echo 11.  recursion-comments
echo 12.  redux
echo 13.  routing-app
echo 14.  routing-assignment
echo 15.  thunk
echo  0.  Back
echo.
set /p r=Choose: 

if "%r%"=="0" goto MENU

set "dirs[1]=action-reducer"
set "dirs[2]=auth-context"
set "dirs[3]=c4"
set "dirs[4]=context"
set "dirs[5]=e2"
set "dirs[6]=employee-app\employee"
set "dirs[7]=falcon"
set "dirs[8]=jaswant"
set "dirs[9]=music"
set "dirs[10]=react-1"
set "dirs[11]=recursion-comments"
set "dirs[12]=redux"
set "dirs[13]=routing-app"
set "dirs[14]=routing-assignment"
set "dirs[15]=thunk"

setlocal enabledelayedexpansion
set "d=!dirs[%r%]!"
if "!d!"=="" goto RUN
echo Starting !d!...
start "react-!d:\=!" cmd /c "cd /d "%~dp0!d!" && npm start"
endlocal
goto RUN

:FORMAT
echo Formatting all files...
call npm run format
echo Done!
pause
goto MENU

:LIST
echo.
for /d %%d in (*) do (
  if exist "%%d\package.json" (echo [OK]  %%d)
)
echo.
pause
goto MENU
