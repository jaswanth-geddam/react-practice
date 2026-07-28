@echo off
cd /d "%~dp0"

echo ============================================
echo  React Practice - Sub Projects
echo ============================================
echo.

:MENU
echo Available projects:
echo  1. action-reducer
echo  2. auth-context
echo  3. c4
echo  4. context
echo  5. e2
echo  6. employee-app
echo  7. falcon
echo  8. infinity-scroll
echo  9. jaswant
echo 10. music
echo 11. react-1
echo 12. rec-comments
echo 13. recursion-comments
echo 14. redux
echo 15. routing-app
echo 16. routing-assignment
echo 17. thunk
echo.
echo  a. Install all
echo  l. List with status
echo  0. Exit
echo.
set /p r=Choose: 

if "%r%"=="0" exit /b
if "%r%"=="a" goto INSTALL_ALL
if "%r%"=="l" goto LIST

set idx=0
set "dirs[1]=action-reducer"
set "dirs[2]=auth-context"
set "dirs[3]=c4"
set "dirs[4]=context"
set "dirs[5]=e2"
set "dirs[6]=employee-app"
set "dirs[7]=falcon"
set "dirs[8]=infinity-scroll"
set "dirs[9]=jaswant"
set "dirs[10]=music"
set "dirs[11]=react-1"
set "dirs[12]=rec-comments"
set "dirs[13]=recursion-comments"
set "dirs[14]=redux"
set "dirs[15]=routing-app"
set "dirs[16]=routing-assignment"
set "dirs[17]=thunk"

call :RUN_PROJECT %r%
goto MENU

:RUN_PROJECT
setlocal enabledelayedexpansion
set "d=!dirs[%1]!"
if "!d!"=="" goto :EOF
echo.
echo === Installing !d! ===
cd /d "%~dp0!d!"
if exist package.json (
  call npm install 2>nul
  echo === Starting !d! ===
  start "react-!d!" cmd /c "cd /d "%~dp0!d!" && npm start"
) else (
  echo No package.json found
)
cd /d "%~dp0"
endlocal
goto :EOF

:INSTALL_ALL
echo === Installing all sub-projects ===
for /d %%d in (*) do (
  if exist "%%d\package.json" (
    echo Installing %%d...
    cd %%d && call npm install && cd ..
  )
)
echo Done!
pause
goto MENU

:LIST
echo.
for /d %%d in (*) do (
  if exist "%%d\package.json" (echo [OK]  %%d) else (echo [--]  %%d)
)
echo.
pause
goto MENU
