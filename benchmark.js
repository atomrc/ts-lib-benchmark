import { execSync } from "child_process";

const commands = {
  esbuild: `
    npx esbuild src/*.ts --format=esm --outdir=./lib/esbuild/esm 2> /dev/null &
    npx esbuild src/*.ts --format=cjs --outdir=./lib/esbuild/cjs 2> /dev/null &
    npx tsc --emitDeclarationOnly --outDir ./lib/esbuild/types
    `,

  swc: `
    npx swc -C module.type=es6 src/*.ts -d ./lib/swc/esm &
    npx swc -C module.type=commonjs src/*.ts -d ./lib/swc/cjs &
    npx tsc --emitDeclarationOnly --outDir ./lib/scw/types
    `,

  tsup: `npx tsup src/*.ts --format esm,cjs --dts -d=./lib/tsup`,

  tsc: `
    npx tsc --module esnext --outDir ./lib/tsc/esm &
    npx tsc --module commonjs --outDir ./lib/tsc/cjs
`,
};

function benchmark(command, onResult) {
  const results = [];
  for (let i = 0; i < 30; i++) {
    const timeStart = Date.now();
    execSync(command);
    const totalTime = Date.now() - timeStart;
    results.push(totalTime);
    onResult(totalTime);
  }
  return results;
}

const rawResults = {};
for (const [tool, command] of Object.entries(commands)) {
  execSync("rm -fr lib");
  console.warn(`benchmarking ${tool}`);
  const result = benchmark(command, console.warn);
  rawResults[tool] = result;
}

const results = {};
for (let [tool, sample] of Object.entries(rawResults)) {
  const max = Math.max(...sample);
  const min = Math.min(...sample);
  const mean = sample.reduce((acc, val) => acc + val) / sample.length;
  results[tool] = { min, max, mean };
}
console.log(results);
