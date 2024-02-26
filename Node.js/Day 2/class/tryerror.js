//error handling in node.js
//1.Try-catch block is used to handle the error in node.js application

// try {
//   //code that might throw an error
// } catch (error) {
//   //handle the error
// }

const fs = require("fs");
//readfile
fs.readFile("../topic.txt", "utf-8", (err, data) => {
  try {
    console.log(err);
  } catch {
    console.log(data);
  }
});

//   try {
//     console.log(err);
//   } catch (error) {
//     console.log(data);
//   }
//   }
