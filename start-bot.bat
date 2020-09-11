@echo off
title System_Gray 
echo Starting the bot, Made by System_Gray
ping localhost 3 >nul
node bot.js
cls
IF ERRORLEVEL 0 ECHO It seems the bot failed to start, please contact System_Gray
ping localhost -n 20 >nul
exit
