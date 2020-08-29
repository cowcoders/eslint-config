.DEFAULT_GOAL := check

test:
	@echo "Testing..."
	@npm run test

build:
	@echo "👩‍🏭 Building..."
	npm run build

check: test build
	@npm run lint
	@echo "✅"

release_patch: release

release_minor: check
	@.scripts/finish-release minor

release_major: check
	@.scripts/finish-release major

release: check
	@.scripts/finish-release patch
