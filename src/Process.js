// Asynchronous
console.log("Begin");

setTimeout(() => {
  console.log("is loading");
}, 3000);

console.log("End");
// result: Begin -> End -> loading
