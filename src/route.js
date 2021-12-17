const express = require('express')

const route = express.Router()
 // Criando todas as rotas da aplicação
route
.get("/", function (req, res) {
    res.render("index")
})
.get("/highscores", function (req, res) {
    res.render("highscores")
})
.get("/game", function (req, res) {
    res.render("game")
})
.get("/end", function (req, res) {
    res.render("end")
})

module.exports = route