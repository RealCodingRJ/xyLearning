import { calculationX } from "./AddFunc/AddFunction.ts";

let message: string = "Hello TypeScript";

console.log(message as string);

interface Rad {
  x: number;
}

function calculatePI(rad: Rad): number {
  return 3.14 * rad.x * rad.x;
}

let piCalc: Rad = {
  x: 10,
};

console.log(calculatePI(piCalc));
message = "Working".toUpperCase();

console.log(1337 as number);

interface User {
  id: number;
  name: string;
  email: string;
}

console.log(calculationX);

function getUser(user: User): string {
  return `Name: ${user.name} Email: ${user.email}`;
}

let personUser: User = {
  id: 1,
  name: "Ryan",
  email: "ryangregoire1234@gmail.com",
};

console.log(getUser(personUser));

interface AnimalName {
  name: string;
  nameLog(): void;
}

class Golden implements AnimalName {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  nameLog() {
    return "name: " + this.name;
  }
}

function greetTypeScript(name: string): string {
  return `Hello ${name}`;
}

console.log(greetTypeScript("RealCodingRJ"));

const goldenOne = new Golden("Bentley");
console.log(goldenOne.nameLog());
