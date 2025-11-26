import database from "../config/database.js"

class Atendimento {
    constructor() {
        this.model = database.db.define('Atendimentos', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            dia: {
                type: database.db.Sequelize.INTEGER
            },
            hora: {
                type: database.db.Sequelize.INTEGER
            },
            valor: {
                type: database.db.Sequelize.INTEGER
            }
            ,
            concluido: {
                type: database.db.Sequelize.BOOLEAN
            }
        })
    }
}

export default new Atendimento().model