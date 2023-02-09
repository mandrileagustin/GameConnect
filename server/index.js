const express = require("express");
const app = express();
const PORT = 4000;

const http = require("http").Server(app);
const cors = require("cors");

app.use(cors());

const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://127.0.0.1:5173",
  },
});

let users = [];

socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on("message", (data) => {
    socketIO.emit("messageResponse", data);
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
  res.json({
    message: "Hello world",
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
