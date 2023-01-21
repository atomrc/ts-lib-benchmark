import { execSync } from "child_process";

const commands = {
  esbuild: `
    npx esbuild src/*.ts --format=esm --outdir=./lib/esbuild/esm 2> /dev/null
    npx esbuild src/*.ts --format=cjs --outdir=./lib/esbuild/cjs 2> /dev/null
    npx tsc --emitDeclarationOnly --outDir ./lib/esbuild/types`,

  swc: `
    npx swc -C module.type=es6 src/*.ts -d ./lib/swc/esm 
    npx swc -C module.type=commonjs src/*.ts -d ./lib/swc/cjs 
    npx tsc --emitDeclarationOnly --outDir ./lib/swc/types
    `,

  tsup: `npx tsup src/*.ts --format esm,cjs --dts -d=./lib/tsup`,
  tsc: `
    npx tsc --module esnext --outDir ./lib/tsc/esm
    npx tsc --module commonjs --outDir ./lib/tsc/cjs
`,
};

execSync("rm -fr lib");
for (const [tool, command] of Object.entries(commands)) {
  console.log(`benchmarking ${tool}`);
  const timeStart = Date.now();
  execSync(command);
  const totalTime = Date.now() - timeStart;
  console.log(`took ${totalTime}ms`);
}
