import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import socket from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
const io = socket(server);

// middleware
app.use(bodyparser.json({limit: '50mb'}));
app.use(cors({
    origin: ['https://localhost:3000']
}));

// socket connections
io.on('connection', socket => {
    
});

// api endpoints

// DB CONNECTION;
mongoose.connect(process.env.MONGOURI, {useUnifiedTopology: true, useNewUrlParser: true}).then(() => {
    console.log('connected to mongoDB');
}).catch(() => {
    console.log('Didnot connect to mongoDB');
})

server.listen(PORT, () => {
    console.log(`Listening to PORT: ${PORT}`);
})