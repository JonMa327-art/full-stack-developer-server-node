
//loads a libaray into the local space
// const express = require('express');
// Can do it this way since we added  "type": "module" to package.json
import express from "express";

//allows resources to be shared acrcoss domains
import cors from 'cors';

import helloController from "./controllers/hello.controller.js";
import userController from "./controllers/user-controller.js"
import tuitsController from "./controllers/tuits-controller.js";

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