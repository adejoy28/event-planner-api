const dotenv = require('dotenv');
dotenv.config();

const express = require('express'),
    port = process.env.PORT || 8000,
    app = express(),
    bodyParser = require('body-parser'),
    connectDb = require('./config/db');

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Z-key");
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.use('/', require('./routes'));



connectDb();

app.listen(port)
console.log("You are currently listening to port: " + port);
