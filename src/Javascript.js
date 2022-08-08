// 1.How would you reverse a string in JavaScript from "dohtem yarra tpircsavaj gnisu tuohtiw tpircSavaJ ni gnirts a esrever uoy dluow woH" to "How would you reverse a string in JavaScript without using javascript array meth"
// without using javascript array method?
const str =
  "dohtem yarra tpircsavaj gnisu tuohtiw tpircSavaJ ni gnirts a esrever uoy dluow woH";

let newStr = "";
// str.length - 1 => last char , i > 0 => first char
for (let i = str.length - 1; i >= 0; i--) {
  newStr += str[i];
}
console.log(newStr);

// const newStr = str.split("");
// console.log(newStr.reverse().join(""));

// 2.How would you find the largest sum of any two element without using javascript math method?
const number = [1, 2, 3, 4, 5, 6];

function findLargestSumPair(num) {
  let first, second;
  if (num[0] > num[1]) {
    first = num[0];
    second = num[1];
  } else {
    first = num[1];
    second = num[0];
  }

  // หา first and second largest จาก array ที่เหลือ
  for (let i = 2; i < num.length; i++) {
    if (num[i] > first) {
      second = first;
      first = num[i];
      //   กรณีเลขไม่ได้เรียง
    } else if (num[i] > second && num[i] != first) second = num[i];
  }
  return first + second;
}

console.log(
  "The largest sum of any two element is " + findLargestSumPair(number)
);

// 3. How would you find the largest sum of any two array without using javascript array method?

arr1 = [1, 2, 3, 4, 5];
arr2 = [10, 20, 30, 40, 50];

function findLargestSumArray1(num1) {
  let first, second;
  if (num1[0] > num1[1]) {
    first = num1[0];
    second = num1[1];
  } else {
    first = num1[1];
    second = num1[0];
  }
  // หา first and second largest จาก array ที่เหลือ
  for (let i = 2; i < num1.length; i++) {
    if (num1[i] > first) {
      second = first;
      first = num1[i];
      //   กรณีเลขไม่ได้เรียง
    } else if (num1[i] > second && num1[i] != first) second = num1[i];
  }
  arr1 = first + second;
  return arr1;
}

function findLargestSumArray2(num2) {
  let first, second;
  if (num2[0] > num2[1]) {
    first = num2[0];
    second = num2[1];
  } else {
    first = num2[1];
    second = num2[0];
  }
  // หา first and second largest จาก array ที่เหลือ
  for (let i = 2; i < num2.length; i++) {
    if (num2[i] > first) {
      second = first;
      first = num2[i];
      //   กรณีเลขไม่ได้เรียง
    } else if (num2[i] > second && num2[i] != first) second = num2[i];
  }
  arr2 = first + second;
  return arr2;
}

ar1 = findLargestSumArray1(arr1);
ar2 = findLargestSumArray2(arr2);

if (arr1 > arr2) {
  console.log("The largest sum of any two arrays is " + arr1);
} else {
  console.log("The largest sum of any two arrays is " + arr2);
}

// 4.How would you count total number of zeros from 1 up to n?

const array = [10, 20, 30, 40, 0];
const zeroCount = array.join("").match(/0/g).length;
console.log("Count of zeroes is " + zeroCount);

// 5. How would you display prime number up to n?
function isPrime(n) {
  if (n == 1 || n == 0) return false;

  for (let i = 2; i < n; i++) {
    //  n != prime number
    if (n % i == 0) return false;
  }
  // n = prime number.
  return true;
}

let N = 25;

let temp = [];
for (let i = 1; i <= N; i++) {
  // number is prime
  if (isPrime(i)) {
    temp.push(i);
  }
}

console.log(`Prime number are ${temp}`);

// 6. If you have a string like "I am the good boy". How can you generate "I ma eht doog yob"?
// Please note that the words are in place but reverse.
const text = "I am the good boy";

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString(text));
