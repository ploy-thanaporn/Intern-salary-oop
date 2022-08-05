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
    /* If current element is greateพ than first then update both first and second */
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
