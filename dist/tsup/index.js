import n from "lodash/partition";
async function t() {
  console.log(n([1, 2, 3, 4], (o) => o % 2));
}
export { t as main };
