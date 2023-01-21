import partition from "lodash/partition";
function* gen(nb) {
  for (let i = 0; i++; i < nb) {
    yield i;
  }
}
function test() {
  console.log("alors?");
}
export async function main() {
  console.log(partition([1, 2, 3, 4], (n) => n % 2));
  for (const value of gen(10)) {
    console.log(value);
  }
}
