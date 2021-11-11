
.PHONY: init
.PHONY: ci

init:
	yarn install
	yarn add --peer

ci:
	yarn build
	yarn lint
	yarn test:unit
