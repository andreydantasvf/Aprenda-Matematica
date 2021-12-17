const express = require('express')
const route = require('./route')
const path = require('path')

const app = express()

// Utilizando os arquivos estaticos
app.use('/public', express.static('public'))

// Configurando o template engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// Pegando as rotas da aplicação
app.use(route)

// Ligando o Servidor
app.listen(8080, () => console.log("Rodando o Servidor Em: localhost:8080"))
