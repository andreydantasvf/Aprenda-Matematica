const express = require('express')
const app = express()

// Utilizando os arquivos estaticos
app.use('/public', express.static('public'))

// Configurando o template engine
app.set("view engine", "ejs")
app.set("views", "./src/views")

// Criando Rotas
app
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

// Ligando o Servidor
app.listen(8080)
console.log("Rodando o Servidor Em: localhost:8080")