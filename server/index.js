const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").Server(app);
const PORT = 4000;
const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://127.0.0.1:5173",
  },
});

app.use(cors());

const fs = require("fs");
//Gets the messages.json file and parse the file into JavaScript object
const rawData = fs.readFileSync("message.json");
const messagesData = JSON.parse(rawData);

let users = [];

socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on("message", (data) => {
    messagesData["messages"].push(data);
    const stringData = JSON.stringify(messagesData, null, 2);
    fs.writeFile("messages.json", stringData, (err) => {
      console.error(err);
    });
    socketIO.emit("messageResponse", data);
    console.log(data);
  });

  //Esto es para enviar un mensaje al usuario, que le dice que se esta escribiendo
  socket.on("typing", (data) => socket.broadcast.emit("typingResponse", data));

  //esto nos muestra cuando un usuario nuevo se une al servidor
  socket.on("newUser", (data) => {
    //esto lo guarda en el array
    users.push(data);
    // console.log(users);
    //Esto envia la lista de usuarios al servidor

    socketIO.emit("newUserResponse", users);
  });

  socket.on("disconnect", (data) => {
    socketIO.emit("messageResponse", data);
    console.log("🔥: A user disconnected");
    //Actualiza la lista de usuarios en el servidor

    users = users.filter((user) => user.socketID !== socket.id);
    // console.log(users);
    //Envia la lista de usuarios al servidor

    socketIO.emit("newUserResponse", users);
    socket.disconnect();
  });
});

app.get("/api", (req, res) => {
  res.json(messagesData);
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
