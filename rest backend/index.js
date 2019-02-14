const express = require('express');

const feedRoutes = require('./routes/feed')

const bodyParser = require('body-parser')

const app = express();

// app.use(bodyParser.urlencoded) // x-www-form-urlencoded <form></form>

app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //render, json send headers setheader only sets the headers 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

app.listen(8080);