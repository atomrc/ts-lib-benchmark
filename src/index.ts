import partition from "lodash/partition";

function* gen(nb: number) {
  for (let i = 0; i++; i < nb) {
    yield i;
  }
}

export async function main() {
  console.log(partition([1, 2, 3, 4], (n) => n % 2));
  for (const value of gen(10)) {
    console.log(value);
  }
}
