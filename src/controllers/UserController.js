const Database = require("../db/config")

module.exports = {
    async create(req, res) {
        const db = await Database()
        const name = req.body.name
        const matter = req.body.matter
        const score = req.body.score

        // Inserindo o nome e a pontuação no banco de dados
        await db.run(`INSERT INTO users (
            name,
            matter,
            highscore
        ) VALUES (
            "${name}",
            "${matter}",
            ${parseInt(score)}
        )`)

        await db.close()

        res.redirect('/')
    }
}