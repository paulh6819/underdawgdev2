//function add - prams - left operand is a number, right operand is a number, returns the sum
// the functions signature is -  - prams - left operand is a number, right operand is a number, returns the sum

function addsNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

//function subtract - prams - left operand is a number, right operand is a number, returns the sum
// the functions signature is -  - prams - left operand is a number, right operand is a number, returns the sum

function subtractsNumber(num1: number, num2: number): number {
  return num1 - num2;
}

//function multiply - prams - left operand is a number, right operand is a number, returns the sum
// the functions signature is -  - prams - left operand is a number, right operand is a number, returns the product

function getProduct(num1: number, num2: number): number {
  return num1 * num2;
}

//function divison - prams - left operand is a number, right operand is a number, returns the sum
// the functions signature is -  - prams - left operand is a number, right operand is a number, returns the quotient

function getQuotient(num1: number, num2: number): number | undefined {
  if (num2 === 0) {
    return undefined;
  }
  return num1 / num2;
}

console.log(getQuotient(2, 0));

//expects two paramaters, the base - the number that will be raised, and the exponent - the number you raise the base to

function exponents(num1: number, num2: number): number {
  return num1 ** num2;
}
console.log(exponents(4, 3));

//compares two numbers for quality

function comparesNumbers(num1: number, num2: number): boolean {
  return num1 === num2;
}

//compares two strings for equality

function conparesStrings(str1: string, str2: string): boolean {
  return str1 === str2;
}

//prams an array of integeters, an number - that we're looking for, return: if the number is found, the index of the number.
//else return -1

function searchForNumber(haystack: number[], needle: number): number {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return i;
    }
  }
  return -1;
}

const practiceArray = [4, 7, 8, 4, 8, 345, 6, 1, 9, 45645];

console.log(searchForNumber(practiceArray, 6));
console.log(searchForNumber(practiceArray, 73));
