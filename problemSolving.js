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

//|| problem number 3 :Write a function that returns the largest element in an array of numbers ||

function largestElement(array) {
  let largest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}

const myArray = [5, 12, 50, 77, 6, 2];
const result3 = largestElement(myArray);
console.log(result3);

//|| problem number 4 :Implement a function to reverse a string.||

function stringReverser(string) {
  let reversedStr = " ";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedStr += string[i];
  }
  return reversedStr;
}

const myString = "Mursalin Hossain";
const result4 = stringReverser(myString);
console.log(result4);

//|| problem number 5 :ICreate a function to check if a string is a palindrome.||

function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

const text = "dom";
const result5 = isPalindrome(text);
console.log(result5);

