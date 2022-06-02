const express = require('express');
const socket = require('socket.io');

const app = express();
const server = app.listen(3000, ()=>{
    console.log("http://localhost:3000")

});

app.use(express.static("public"));
const io = socket(server);

//
const activeUsers = new Set();


io.on("connection", (socket) => {
    console.log("se realiza conexion socket");

    socket.on("newUser", (data) => {
        socket.userId = data;
        activeUsers.add(data);
        io.emit("newUser", [...activeUsers]);

    });
    socket.on("disconnect", () => {
        activeUsers.delete(socket.userId);
        io.emit("userDisconnected", socket.userId);
    });

    socket.on("chatMessage", (data) => {
        io.emit("chatMessage", data)
    });

    

    socket.on("typing", (data) => {
        socket.broadcast.emit("typing", data);
    })
});

