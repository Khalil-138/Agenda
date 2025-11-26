import { Sequelize } from 'sequelize'
//nome do banco: Agenda
class Database {
    constructor() {
        this.init()
    }

    init() {
        // .env - dotenv
        this.db = new Sequelize({
            database: 'Agenda',
            host: 'localhost',
            username: 'root',
            password: '',
            dialect: 'mysql'
        })
    }
}

export default new Database()