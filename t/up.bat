@ECHO OFF
set mypath=%cd%
start cmd /k "docker compose -f %mypath%\docker-compose.yaml -p game-socket up -d --renew-anon-volumes"

