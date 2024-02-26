const express = require("express");

const app = express();

//Routing for home page using get method
app.get("/", (req, res) => {
  res.send("welcome to LU website");
});

//Routing for product page
app.get("/product:id", (req, res) => {
  const productId = res.params.id;
  //fetch product data based on the product id and send message
});

//Route to handle adding an item to cart post
app.post("/cart/add", (req, res) => {
  const item = req.body;
  //Add item to the cart and send a success response
});

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
