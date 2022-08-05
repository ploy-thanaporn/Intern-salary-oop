// 1.How would you reverse a string in JavaScript from "dohtem yarra tpircsavaj gnisu tuohtiw tpircSavaJ ni gnirts a esrever uoy dluow woH" to "How would you reverse a string in JavaScript without using javascript array meth"
// without using javascript array method?
const str =
  "dohtem yarra tpircsavaj gnisu tuohtiw tpircSavaJ ni gnirts a esrever uoy dluow woH";

let newStr = " ";
// str.length - 1 => last char , i > 0 => first char
for (let i = str.length - 1; i >= 0; i--) {
  newStr += str[i];
}
console.log(newStr);

// const newStr = str.split("");
// console.log(newStr.reverse().join(""));

//  2.
