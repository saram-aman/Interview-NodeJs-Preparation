const app = require("./app");
const router = app.Router()

const routes = require(__DIR__)

routes.forEach(function(route) {
     if(route === "index.js") return
     router.use(`/${route}`, require(`./${route}`))
})

module.exports = router