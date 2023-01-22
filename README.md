# TypeScript compilers benchmark (for compiling libraries)

This is a benchmark to compare `tsc`, `swc`, `esbuild` and `tsup` when it comes to building TypeScript libraries. 

It's based on a single TS file (found in `src/index.ts`)

IF you want to try with bigger `ts` files as input, feel free to add as many `ts` files in `src`. 
Running `pnpm benchmark` will then run the benchmark on those files.

## Run benchmark

```
pnpm benchmark
```
