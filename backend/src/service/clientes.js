import cliente from '../model/clientes.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const JWT_SEGREDO = "M3uS3gr3d0"
const SALT = 11 // entre 10 e 12 tá baum

class ServiceCliente {

    async FindAll() {
        return Cliente.findAll()
    }

    async FindOne(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        // preciso procurar um usuario no banco
        const cliente = await cliente.findByPk(id)

        if (!cliente) {
            throw new Error(`Usuário ${id} não encontrado`)
        }

        return cliente
    }

    async Create(nome, email, senha,) {
        if (!nome || !email || !senha) {
            throw new Error("favor preencher todos os campos")
        }

        const senhaCrip = await bcrypt.hash(String(senha), SALT)

        await cliente.create({
            nome,
            email,
            senha: senhaCrip,
        })
    }

    async Update(id, nome, senha) {
        const oldcliente = await cliente.findByPk(id)
        // oldcliente.nome = nome || oldcliente.nome

        oldcliente.senha = senha
            ? await bcrypt.hash(String(senha), SALT)
            : oldcliente.senha

        // cliente.Update(id, nome)
    }

    async Delete(id) {
        const oldCliente = await cliente.findByPk(id)

        oldCliente.destroy()
    }

    async Login(email, senha) {
        if (!email || !senha) {
            throw new Error("Email ou senha inválidos.")
        }

        const cliente = await cliente.findOne({ where: { email } })

        if (
            !cliente
            || !(await bcrypt.compare(String(senha), cliente.senha))
        ) {
            throw new Error("Email ou senha inválidos.")
        }

        return jwt.sign(
            { id: cliente.id, nome: cliente.nome, permissao: cliente.permissao },
            JWT_SEGREDO,
            { expiresIn: 60 * 60 }
        )
    }
}

export default new ServiceCliente()