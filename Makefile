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

# 📦 Releases
patch: VERSION="patch"
minor: VERSION="minor"
major: VERSION="major"

release patch minor major: check
	@./.scripts/finish-release "$(VERSION)"
