// const express = require("express")
// const session = require("express-session")
// const bodyParser = require("body-parser")
// const cors = require("cors")
// const multer = require("multer")
// const morgan = require("morgan")
// require("dotenv").config

// const app = express()

// app.use(session({
//     secret: process.env.SECRET,
//     resave: true,
//     saveUninitialized: false
// }))

// app.use(morgan('dev', { skip : (req, res) => !process.env.NODE_ENV }))

// app.use(bodyParser.json())

// app.use(bodyParser.urlencoded({
//     extended: false
// }))

// app.use(cors({
//     origin: "*"
// }))

// app.use(function(req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", "*"),
//     res.setHeader("Access-Control-Allow-Headers", "origin, X-Request-With, Content-Type, Accept, Authorization")
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
//     res.setHeader("Access-Control-Allow-Credentials", true)
//     if(req.method === "OPTIONS"){
//         return res.status(204).send("OK")
//     }
//     next()
// })

// app.use(function(req, res, next) {
//     return res.status(404).send("Invalid URL")
// })

// let printLog = (message) => console.log(message)
// global.printLog = printLog

// module.exports = app

const express = require('express')
const app = express()

app.use(express.json())

function calculate_and_respond(req, res, operation) {
    let { arg1, arg2 } = req.body
    try {
        arg1 = parseFloat(arg1)
        arg2 = parseFloat(arg2)

        if (isNaN(arg1) || isNaN(arg2)) throw new Error("Invalid numbers")

        let result
        switch (operation) {
            case 'add':
                result = arg1 + arg2
                break
            case 'minus':
                result = arg1 - arg2
                break
            case 'multiply':
                result = arg1 * arg2
                break
            case 'divide':
                if (arg2 === 0) return res.status(400).json({ error: "Cannot divide by zero" })
                result = arg1 / arg2
                break
            default:
                throw new Error("Invalid operation")
        }
        res.json({ result })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

app.post("/add", (req, res) => calculate_and_respond(req, res, 'add'))
app.post("/minus", (req, res) => calculate_and_respond(req, res, 'minus'))
app.post("/multiply", (req, res) => calculate_and_respond(req, res, 'multiply'))
app.post("/divide", (req, res) => calculate_and_respond(req, res, 'divide'))

app.listen(3000, () => {
    console.log("App listening at port 3000")
})

