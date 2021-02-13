import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import socket from 'socket.io';
import http from 'http';
import dotenv from 'dotenv';
import RegistrationRouter from './Routes/signup.js';
import LoginRouter from './Routes/login.js';
import AuthCheckRoute from './Routes/AuthCheck.js';

const app = express();
const server = http.createServer(app);
const PORT = 8000;
const io = socket(server);
dotenv.config();

// middleware
app.use(bodyparser.json({limit: '50mb'}));

// socket connections
io.on('connection', socket => {
    
});

// api endpoints
app.use('/check-auth', AuthCheckRoute);
app.use('/register', RegistrationRouter);
app.use('/login', LoginRouter);

// DB CONNECTION;
mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true}).then(() => {
    console.log('connected to mongoDB');
}).catch(() => {
    console.log('Didnot connect to mongoDB');
})

server.listen(PORT, () => {
    console.log(`Listening to PORT: ${PORT}`);
})