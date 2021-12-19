const express = require('express')
const UserController = require('./controllers/UserController')
const ScoresController = require('./controllers/ScoresController')

const route = express.Router()
 // Criando todas as rotas da aplicação
route
.get("/", function (req, res) {
    res.render("index")
})
.get("/game", function (req, res) {
    res.render("game")
})
.get("/end", function (req, res) {
    res.render("end")
})
.get("/highscores", ScoresController.open)
.post("/create-user", UserController.create)

module.exports = route