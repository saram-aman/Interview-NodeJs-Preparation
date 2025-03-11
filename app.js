const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === 'production' }
}));

app.use(morgan('dev', { skip: (req, res) => process.env.NODE_ENV !== 'development' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({
    origin: "*",
    methods: "GET,POST,PUT,PATCH,DELETE,OPTIONS",
    allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
    credentials: true
}));

app.use((req, res, next) => {
    if (req.method === "OPTIONS") {
        return res.status(204).send("OK");
    }
    next();
});

app.use((req, res) => {
    res.status(404).send("Invalid URL");
});

global.printLog = console.log;

module.exports = app;
