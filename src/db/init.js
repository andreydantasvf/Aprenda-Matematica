const Database = require("./config")

// Iniciando o banco de dados e crinando a tabela users
const initDb = {
    async init(){
        const db = await Database()

        await db.exec(`CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            matter TEXT,
            highscore INTEGER
        )`);

        await db.close()
    }
}

initDb.init();