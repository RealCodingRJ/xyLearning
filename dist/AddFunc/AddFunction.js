"use strict";
function addNumbers(a, b) {
    return a.a + b.b;
}
const number = {
    a: 1,
    b: 2,
};
let calculationX = addNumbers(number, number);
console.log(`1 + 2 = ${addNumbers(number, number)}`);
module.exports = calculationX;
//# sourceMappingURL=AddFunction.js.map