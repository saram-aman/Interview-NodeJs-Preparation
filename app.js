const express = require("express")
const session = require("express-session")
const bodyParser = require("body-parser")
const cors = require("cors")
const multer = require("multer")
const morgan = require("morgan")
require("dotenv").config

const app = express()

app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false
}))

app.use(morgan('dev', { skip : (req, res) => !process.env.NODE_ENV}))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(cors({
    origin: "*"
}))

app.use(function(req, res, next) {
    res.setHeader("Access-Controll-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "rigin, X-Request-With, Content-Type, Accept, Authorization")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
    res.setHeader("Access-Control-Allow-Credentials", true)
    if(req.method === "OPTIONS"){
        return res.status(204).send("OK")
    }
    next()
})

app.use(function(req, res, next) {
    return res.status(404).send("Invalid URL")
})

module.exports = app
