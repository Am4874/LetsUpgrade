const { Console } = require("console");
const { Socket } = require("dgram");
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));
//handle socket communication for chat functionalities

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("join-chat", (chatId) => {
    //logic to join a chat room
    socket.join(chatId);
  });

  socket.on("send-message", (message) => {
    //sending the message to the specific chat room only
    io.to(message.chatId).emit("new-message", message);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

//start the server
http.listen(3000, () => {
  Console.log("Server is listening on the port 3000");
});
