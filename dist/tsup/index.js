// src/index.ts
import partition from "lodash/partition";
function* gen(nb) {
  for (let i = 0; i++; i < nb) {
    yield i;
  }
}
async function main() {
  console.log(partition([1, 2, 3, 4], (n) => n % 2));
  for (const value of gen(10)) {
    console.log(value);
  }
}
export { main };
