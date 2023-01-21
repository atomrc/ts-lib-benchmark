import partition from "lodash/partition";

async function main() {
  console.log(partition([1, 2, 3, 4], (n) => n % 2));
  const part = await import("lodash/partition");
  console.log(part.default([1, 2, 3, 4], (n) => n % 2));
}

main();