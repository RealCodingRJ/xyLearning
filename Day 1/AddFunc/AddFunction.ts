interface Numbers {
  a: number;
  b: number;
}

function addNumbers(a: Numbers, b: Numbers): any {
  return a.a + b.b;
}

const number: Numbers = {
  a: 1,
  b: 2,
};

export let calculationX = addNumbers(number, number) as number;

console.log(`1 + 2 = ${addNumbers(number, number) as number}`);
