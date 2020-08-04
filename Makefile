version = $(shell cat package.json | grep '"version"' | awk -F'"' '{print $$4}')

install:
	@npm install

publish:
	@npm publish
	@git tag $(version)
	@git push origin $(version)

clean:
	@rm -fr _site

test:
	@npm test

cov:
	@npm run cov


.PHONY: install publish clean test cov
