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

// ถ้ามีหลาย url ทำให้เรียก callback ซ้ำซ้อน (callback hell) แก้โดยใช้ Promise
const connect = true;
const url1 = "lauv.song/file1.json";

function loading(url) {
  console.log(`is loading from ${url}`);
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (connect) {
        resolve(`load ${url} success`);
      } else {
        reject("error");
      }
    }, 3000);
  });
}
loading(url1)
  .then((output) => {
    console.log(output);
  })
  .catch((err) => {
    console.log(err);
  });
