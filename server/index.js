const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log('We have a new connection !!!');

    socket.on('join', ({ name, room }, callback) => {

        const { error, user } = addUser({ id: socket.id, name, room });
        if (error) return callback(error)

        socket.emit('message', { user: 'admin', text: `${user.name}, ${user.room} odasına hoş geldin!` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, odaya giriş yaptı!` })

        socket.join(user.room);

        io.to(user.room).emit('roomData', {room:user.room,users:getUsersInRoom(user.room)})

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('message', { user: user.name, text: message })
        io.to(user.room).emit('roomData', { room: user.room, users:getUsersInRoom(user.room)})
        callback();
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id)
        if(user){
            io.to(user.room).emit('message',{user:'admin',text:`${user.name} odadan ayrıldı.`})
        }
    })
})

app.use(router);
app.use(cors());

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));