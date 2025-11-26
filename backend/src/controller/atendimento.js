import ServiceAtendimento from '../service/atendimento.js'

class ControllerAtendimento {

    async FindAll(_, res) {
        try {
            const Atendimentos = await ServiceAtendimento.FindAll()
            res.status(200).send({ Atendimentos })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async FindOne(req, res) {
        try {
            const id = req.params.id || req.headers?.Atendimento?.id

            const Atendimento = await ServiceAtendimento.FindOne(id)
            res.status(200).send({ Atendimento })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async Create(req, res) {
        try {
            const loggedAtendimento = req.headers?.Atendimento
            let permissao = 1
            if (loggedAtendimento && loggedAtendimento.permissao === 0) {
                permissao = req.body.permissao
            }
            const { dia, hora, valor } = req.body
            await ServiceAtendimento.Create(dia, hora, valor,)
            res.status(201).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    Update(req, res) {
        try {
            const id = req.params.id || req.headers?.Atendimento?.id
            const dia = req.body.dia
            ServiceAtendimento.Update(id, dia)
            res.status(200).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async Delete(req, res) {
        try {
            const id = req.params.id || req.headers?.Atendimento?.id
            await ServiceAtendimento.Delete(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async Login(req, res) {
        try {
            const { hora, valor } = req.body

            const token = await ServiceAtendimento.Login(hora, valor)

            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

}
export default new ControllerAtendimento()