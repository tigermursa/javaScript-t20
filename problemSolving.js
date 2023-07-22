//|| problem number 1 : Write a function to find the sum of two numbers.||
// first making the simple sum function ...
function sumTwoNumbers(a, b) {
  return a + b;
}
const number1 = 5;
const number2 = 10;
const result = sumTwoNumbers(number1, number2);
console.log(result); //result output will be : 15

//|| problem number 2 : Create a function to check if a given number is even or odd ||

function oddOrEven(number) {
  if (number % 2 === 0) {
    return "Even number";
  } else {
    return "Odd number";
  }
}
const testNumber = 14;
const result2 = oddOrEven(testNumber);
console.log(result2);
