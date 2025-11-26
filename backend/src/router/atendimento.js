import express from 'express'
import ControllerAtendimento from '../controller/atendimentos.js'
import authMiddleware from '../middleware/auth.js'

const router = express.Router()

router.post('/login', ControllerAtendimento.Login)

router.get('/atendimento/context', Controlleratendimento.FindOne)
router.post('/atendimento/', Controlleratendimento.Create)
router.put('/atendimento/', Controlleratendimento.Update)
router.delete('/atendimento/', Controlleratendimento.Delete)

router.get('/atendimentos', Controlleratendimento.FindAll)
router.get('/atendimento/:id', Controlleratendimento.FindOne)
router.post('/atendimento/admin', Controlleratendimento.Create)
router.put('/atendimento/:id', Controlleratendimento.Update)
router.delete('/atendimento/:id', Controlleratendimento.Delete)

export default router