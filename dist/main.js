"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculationX = require("./AddFunc/AddFunction");
let message = "Hello TypeScript";
console.log(message);
function calculatePI(rad) {
    return 3.14 * rad.x * rad.x;
}
let piCalc = {
    x: 10,
};
console.log(calculatePI(piCalc));
message = "Working".toUpperCase();
console.log(1337);
console.log(calculationX);
function getUser(user) {
    return `Name: ${user.name} Email: ${user.email}`;
}
let personUser = {
    id: 1,
    name: "Ryan",
    email: "ryangregoire1234@gmail.com",
};
console.log(getUser(personUser));
class Golden {
    constructor(name) {
        this.name = name;
    }
    nameLog() {
        return "name: " + this.name;
    }
}
function greetTypeScript(name) {
    return `Hello ${name}`;
}
console.log(greetTypeScript("RealCodingRJ"));
const goldenOne = new Golden("Bentley");
console.log(goldenOne.nameLog());
const greetPerson = (name) => "Hello " + name;
console.log(greetPerson("RealCodingRJ"));
const GreetPerson = (name) => {
    console.log(`name: ${name}`);
};
const propsName = {
    name: "Ryan James",
};
console.log(propsName.name);
//# sourceMappingURL=main.js.map