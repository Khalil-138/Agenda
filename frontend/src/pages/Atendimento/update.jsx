import { useEffect, useState } from "react"
import { updateatendimento } from "../../api/atendimentos";
import { useLocation, useNavigate } from "react-router-dom";
import './styles.css'

export default function Updateatendimento() {
    const navigate = useNavigate()
    const [atendimento, setatendimento] = useState({
        nome: '',
        email: '',
        senha: '',
        ativo: true
    })
    // adicionar atendimentoLocation novo para pegar o state passado anteriormente
    const location = useLocation()
    const { atendimento: prevatendimento } = location.state

    const handleChange = (e) => {
        const { id, value } = e.target;
        setatendimento({
            ...atendimento,
            [id]: value
        })
    }

    const handleReset = (e) => {
        e.preventDefault()
        // alterado do init para o prev
        setatendimento({ ...prevatendimento, senha: '' })
    }

    const handleSave = async (e) => {
        e.preventDefault()
        // Alterada função pra update
        const response = await updateatendimento(prevatendimento.id, atendimento)

        if (response.status === 200) {
            navigate('/atendimentos')
        } else {
            console.log(response)
        }
    }

    // Adicionado
    useEffect(() => {
        setatendimento({ ...prevatendimento, senha: '' })
    }, [])

    return (
        <div className="form">
            <form>
                <div>
                    <label>Nome: </label>
                    <input type="text" name="nome" id='nome' value={atendimento.nome} onChange={handleChange} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" id='email' value={atendimento.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Senha: </label>
                    <input type="password" name="senha" id='senha' value={atendimento.senha} onChange={handleChange} />
                </div>
                <div className="actions">
                    <button
                        type="reset"
                        onClick={handleReset}
                    >Limpar</button>
                    <button
                        type="submit"
                        onClick={handleSave}
                    >Enviar</button>
                </div>
            </form>
        </div>
    )
}