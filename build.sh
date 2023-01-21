rm -fr dist 
echo "\nesbuild"
time npx esbuild src/*.ts --target=es2017 --tree-shaking=true --outdir=./dist/esbuild 2> /dev/null

echo "\ntsup"
time npx tsup src/*.ts --format esm --target=es2017 --treeshake -d=./dist/tsup > /dev/null

echo "\nswc"
time npx swc -d ./dist/swc -C jsc.target=es2017 src/*.ts > /dev/null

echo "\ntsc"
time npx tsc --outDir ./dist/tsc 2> /dev/null