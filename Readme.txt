[optional] docker system prune -a

chmod +x run_docker_compose.sh
./run_docker_compose.sh


if get error like this
-bash: ./run_docker_compose.sh: /bin/sh^M: bad interpreter: No such file or directory

run this

dos2unix run_docker_compose.sh