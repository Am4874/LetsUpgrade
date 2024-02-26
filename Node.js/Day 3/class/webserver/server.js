const http = require("http");
const express = require("express");
const app = express();

const server = http.createServer((req, res) => {
  //basic handler
  if (req.url === "/") {
    res.writeHead(200, "Content-Type: text/plain"); //sets the response header
    res.end("Hello from basic http server!\n");//sends the response with a simple message

  }else{
    res.writeHead(404,"Content-type":)
  }
});
