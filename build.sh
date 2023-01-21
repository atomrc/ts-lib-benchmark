rm -fr dist 
npx esbuild src/*.ts --target=es2017 --tree-shaking=true --outdir=./dist/esbuild
npx tsup src/*.ts --format esm --target=es2017 --treeshake -d=./dist/tsup
npx swc -d ./dist/swc -C jsc.target=es2017 src/*.ts
npx tsc --outDir ./dist/tsc