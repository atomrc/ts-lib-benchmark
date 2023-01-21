"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var _partition = require("lodash/partition");
var _partition2 = _interopRequireDefault(_partition);
async function t() {
  console.log(_partition2.default.call(void 0, [1, 2, 3, 4], (o) => o % 2));
}
exports.main = t;
