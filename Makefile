
.PHONY: init
.PHONY: ci

init:
	yarn install

ci:
	yarn build
	yarn lint
	yarn test:unit
