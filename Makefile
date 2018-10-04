up:
	docker-compose up -d
stop:
	docker-compose stop
	docker rm -f $(docker ps -a | grep hust_app | awk '{print $1}') || echo "\n\n >bash stoped before\n\n"
app:
	docker rm -f hust_app; docker-compose run --name hust_app --rm -p 9900:4000 phoenix iex -S mix phx.server

bash:
	docker-compose run phoenix bash
prod:
	docker-compose run \
		-e MIX_ENV=$MIX_ENV \
		-e NODE_ENV=$NODE_ENV \
		-e WCMS_HOSTNAME=$WCMS_HOSTNAME \
		--name hust_app --rm \
	  -p 9900:4000 \
	  phoenix iex -S mix phx.server
format:
	mix format mix.exs “lib/**/*.{ex,exs}”
