const express = require("express")
const session = require("express-session")
const bodyParser = require("body-parser")
const cors = require("cors")
const multer = require("multer")
const morgan = require("morgan")
require("dotenv").config

const app = express()

app.use(session({

}))

app.use(cors)
