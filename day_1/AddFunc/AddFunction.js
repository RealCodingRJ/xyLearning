"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculationX = void 0;
function addNumbers(a, b) {
    return a.a + b.b;
}
const number = {
    a: 1,
    b: 2,
};
exports.calculationX = addNumbers(number, number);
console.log(`1 + 2 = ${addNumbers(number, number)}`);
//# sourceMappingURL=AddFunction.js.map