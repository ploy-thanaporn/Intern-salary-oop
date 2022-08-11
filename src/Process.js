// Asynchronous
console.log("Begin");

setTimeout(() => {
  console.log("is loading");
}, 3000);
console.log("End");
// result: Begin -> End -> loading

// จัดการทำงานแบบ Asynchronous ให้เป็นลำดับขั้นตอน
const url = "2Scoops.cnx/files.json";
function dowloading(url, callback) {
  console.log(`is loading from ${url}`);
  setTimeout(() => {
    callback(url);
  }, 4000);
}

function complete(result) {
  console.log(` download ${result} success`);
}

dowloading(url, complete);
// result : is loading from 2Scoops.cnx/files.json -> Success download
