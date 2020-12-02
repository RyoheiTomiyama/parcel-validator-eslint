publish-prerelease:
	npm version prerelease --no-git-tag-version && npm publish
publish-patch:
	npm version patch && npm pulish

publish-minor:
	npm version minor && npm pulish

publish-major:
	npm version major && npm pulish