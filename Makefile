.PHONY: i
i:
	docker compose run --rm app npm i

.PHONY: dev
dev:
	docker compose run --rm app npm run dev