const Database = require("../db/config")

// Pegando os dados do  banco e mandando para o highscores.html
module.exports = {
    async open(req, res) {
        const db = await Database()
        const users = await db.all(`SELECT * FROM users ORDER BY highscore DESC`)

        res.render("highscores", {users: users})
    }
}