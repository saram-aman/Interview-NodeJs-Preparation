const app = require("./app");
const router = app.Router()
const path = require("path")
const fs = require("fs")

const routes = require(__DIR__)

routes.forEach(routes as route) {
     if(route === "index.js") return

     router.use(/${route}, require({route}))
}

module.exports = router