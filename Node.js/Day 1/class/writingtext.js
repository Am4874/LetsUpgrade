const fs = require("node:fs");

const content = "const multi = 12 * 4";
fs.writeFile("./dummy.js", content, (err) => {
  if (err) {
    console.log(err);
  } else {
    //write in file successfully
  }
});
