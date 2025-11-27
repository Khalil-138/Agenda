import { useEffect, useState } from "react"
import { updateatendimento } from "../../api/atendimento";
import { useLocation, useNavigate } from "react-router-dom";
import './styles.css'

export default function UpdateAtendimento() {
    const navigate = useNavigate()
    const [atendimento, setAtendimento] = useState({
        dia: '',
        hora: '',
        valor: '',
        concluido: true
    })
    // adicionar atendimentoLocation novo para pegar o state passado anteriormente
    const location = useLocation()
    const { atendimento: prevatendimento } = location.state

    const handleChange = (e) => {
        const { id, value } = e.target;
        setAtendimento({
            ...atendimento,
            [id]: value
        })
    }

    const handleReset = (e) => {
        e.preventDefault()
        // alterado do init para o prev
        setAtendimento({ ...prevatendimento, valor: '' })
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
        setAtendimento({ ...prevatendimento, valor: '' })
    }, [])

    return (
        <div className="form">
            <form>
                <div>
                    <label>dia: </label>
                    <input type="text" name="dia" id='dia' value={atendimento.dia} onChange={handleChange} />
                </div>
                <div>
                    <label>hora: </label>
                    <input type="hora" name="hora" id='hora' value={atendimento.hora} onChange={handleChange} />
                </div>
                <div>
                    <label>valor: </label>
                    <input type="password" name="valor" id='valor' value={atendimento.valor} onChange={handleChange} />
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