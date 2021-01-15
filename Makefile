fmt:
	@node node_modules/prettier/bin-prettier.js --write --plugin-search-dir=. ./**/*.svelte
	@node node_modules/prettier/bin-prettier.js --write --plugin-search-dir=. ./**/*/*.svelte
