const fs = require("fs");
//readfile
fs.readFile("node.md", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
//writefile
const content = "hii, this is something new to add using node!";
fs.writeFile("./dummy.js", content, (err) => {
  if (err) {
    console.log(err);
  } else {
    //file write successfully
  }
});
