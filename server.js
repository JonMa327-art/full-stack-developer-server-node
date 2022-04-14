
//loads a libaray into the local space
// const express = require('express');
// Can do it this way since we added  "type": "module" to package.json
import express from "express";

//allows resources to be shared acrcoss domains
import cors from 'cors';


//import conterllers
import helloController from "./controllers/hello.controller.js";
import userController from "./controllers/user-controller.js"
import tuitsController from "./controllers/tuits-controller.js";
import mongoose from "mongoose";
// import mongoose from "mongoose";

//connects to the web database
// mongoose.connect('mongodb://localhost:27017/webdev');
// mongoose.connect('mongodb+srv://JonathanMa:<password>@cluster0.jhkui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const CONNECTION_STRING = 'mongodb+srv://JonathanMa:bag027mar@cluster0.hnrrl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    || 'mongodb://localhost:27017/webdev'
// mongoose.connect('mongodb://localhost:27017/webdev');
mongoose.connect(CONNECTION_STRING);


//express() creates an instance of the express library and assigns it to app
const app = express();
app.use(cors());

//app.get declares a http handler. It maps the url patter /hello
//I request to the url triggers the second parameter ((req, res) => { res.send('Hello World!') })
//recieve two parameters request and responce
//res.send response to the request
// app.get('/hello', (req, res) => { res.send('Life is Good!') })


//parse JSON from HTTP request body
app.use(express.json());

app.get('/', (req, res) => { res.send('Welcome to Full Stack Development!') })
helloController(app)
userController(app)
tuitsController(app)
app.listen(process.env.PORT || 4000);