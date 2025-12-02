let message: string = "Hello TypeScript";

console.log(message as string);

interface Numbers {
  a: number;
  b: number;
}

function addNumbers(a: Numbers, b: Numbers): any {
  return a.a + b.b;
}

message = "Working".toUpperCase();

const number: Numbers = {
  a: 1,
  b: 2,
};

console.log(`1 + 2 = ${addNumbers(number, number) as number}`);
console.log(1337 as number);

interface User {
  id: number;
  name: string;
  email: string;
}

function getUser(user: User): string {
  return `Name: ${user.name} Email: ${user.email}`;
}

let personUser: User = {
  id: 1,
  name: "Ryan",
  email: "ryangregoire1234@gmail.com",
};

console.log(getUser(personUser));
