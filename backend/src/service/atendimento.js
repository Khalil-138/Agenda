import atendimento from '../model/atendimento.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const JWT_SEGREDO = "M3uS3gr3d0"
const SALT = 11 // entre 10 e 12 tá baum

class ServiceAtendimento {

    async FindAll() {
        return atendimento.findAll()
    }

    async FindOne(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        // preciso procurar um usuario no banco
        const atendimento = await atendimento.findByPk(id)

        if (!atendimento) {
            throw new Error(`Usuário ${id} não encontrado`)
        }

        return atendimento
    }

    async Create(dia, hora, valor, concluido) {
        if (!dia || !hora || !valor || !concluido)  {
            throw new Error("favor preencher todos os campos")
        }

        //const senhaCrip = await bcrypt.hash(String(valor), SALT)

        await atendimento.create({
            dia,
            hora,
            valor,
            concluido
        })
    }

    async Update(id, dia, hora, valor, concluido) {
        const oldatendimento = await atendimento.findByPk(id)
        // oldatendimento.dia = dia || oldatendimento.dia

        oldatendimento.valor = valor
            ? await bcrypt.hash(String(valor), SALT)
            : oldatendimento.valor

        // atendimento.Update(id, dia)
    }

    async Delete(id) {
        const oldatendimento = await atendimento.findByPk(id)

        oldatendimento.destroy()
    }

    async Login(hora, valor) {
        if (!hora || !valor) {
            throw new Error("hora ou valor inválidos.")
        }

        const atendimento = await atendimento.findOne({ where: { hora } })

        if (
            !atendimento
            || !(await bcrypt.compare(String(valor), atendimento.valor))
        ) {
            throw new Error("hora ou valor inválidos.")
        }

        return jwt.sign(
            { id: atendimento.id, dia: atendimento.dia, permissao: atendimento.permissao },
            JWT_SEGREDO,
            { expiresIn: 60 * 60 }
        )
    }
}

export default new ServiceAtendimento()