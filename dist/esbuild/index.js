"use strict";
import partition from "lodash/partition";
export async function main() {
  console.log(partition([1, 2, 3, 4], (n) => n % 2));
}
