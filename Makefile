all:
	npm i rollup @rollup/plugin-inject rollup-plugin-commonjs
	./node_modules/.bin/rollup -c
