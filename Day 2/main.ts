let names = "RealCodingRJ";
let message: string = "Hello " + names;
let greeting: string = `Good Afternoon ${names}`;

console.log(message);
console.log(greeting);

// String Methods
let text: string = "TypeScript is Awesome";

console.log(text.toUpperCase());
console.log(text.substring(0, 10));

let age: number = 26;
let price: number = Number(10) / Number(3);
// 3.333 bc 10 * 3 = 3.333
// bc 2/2 = 1 and 4/2 = 2 so (12)
console.log(parseInt(price.toFixed(1)));

console.log(age);

// Maths Calculations

let posX = 12;
let answer = (posX * 2) / 2;

// 12 bc 12 * 2 = 24 and 24/2 = 12;
// bc 2/2 = 1 and 4/2 = 2 so (12)

console.log(answer === posX);

let pi: number = 3.14159;
console.log(pi.toFixed(2));
console.log(pi.toString());

let isActive: boolean = false;
let isCompleted: boolean = true;

console.log(isActive);
console.log(isCompleted);

let hasPermission: boolean = true;
let isLoggedIn: boolean = true;

console.log(hasPermission && isLoggedIn);
console.log(hasPermission || isLoggedIn);
console.log(!isLoggedIn);

let num: number[] = [1, 2, 3, 4];
let namesOfPeople: Array<string> = ["James", "McDonolds", "Applebees"];

console.log(num);
console.log(namesOfPeople);

let numbers: number[] = [1, 2, 4, 5, 9];
numbers.push(6);
console.log(numbers);

let doubled = numbers.map((num) => num * 2);
console.log(doubled);

let personName: [string, number] = ["Ryan", 26];
console.log(personName);

let cords: [number, number] = [10 / 2, 20 / 2];

cords.push(25 / 5);

cords.map((e, index) => {
  console.log(index, e);
});

const Color = {
  Red: "RED",
  Green: "GREEN",
  Blue: "BLUE",
} as const;

console.log(Color.Blue);
