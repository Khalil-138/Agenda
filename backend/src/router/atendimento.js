import express from 'express'
import ControllerAtendimento from '../controller/atendimento.js'
import authMiddleware from '../middleware/auth.js'

const router = express.Router()

router.post('/login', ControllerAtendimento.Login)

router.get('/atendimento/context', ControllerAtendimento.FindOne)
router.post('/atendimento/', ControllerAtendimento.Create)
router.put('/atendimento/', ControllerAtendimento.Update)
router.delete('/atendimento/', ControllerAtendimento.Delete)

router.get('/atendimentos', ControllerAtendimento.FindAll)
router.get('/atendimento/:id', ControllerAtendimento.FindOne)
router.post('/atendimento/admin', ControllerAtendimento.Create)
router.put('/atendimento/:id', ControllerAtendimento.Update)
router.delete('/atendimento/:id', ControllerAtendimento.Delete)

export default router