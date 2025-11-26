import { useState } from "react"
import { CreateAtendimento } from "../../api/atendimentos";
import { useNavigate } from "react-router-dom";
import './styles.css'

const INITIAL_STATE = {
    Dia: '',
    Hora: '',
    Valor: ''
}

export default function CreateAtendimento() {
    const navigate = useNavigate()
    const [atendimento, setatendimento] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { id, value } = e.target;
        setatendimento({
            ...atendimento,
            [id]: value
        })
    }

    const handleReset = (e) => {
        e.preventDefault()
        setatendimento(INITIAL_STATE)
    }

    const handleSave = async (e) => {
        e.preventDefault()
        // seria idela validar os valores do objeto antes de enviar
        const response = await CreateAtendimento(atendimento)

        if (response.status === 201) {
            navigate('/atendimentos')
        } else {
            console.log(response)
        }
    }

    return (
        <div className="form">
            <form>
                <div>
                    <label>Dia: </label>
                    <input type="text" name="Dia" id='Dia' value={atendimento.Dia} onChange={handleChange} />
                </div>
                <div>
                    <label>Hora: </label>
                    <input type="Hora" name="Hora" id='Hora' value={atendimento.Hora} onChange={handleChange} />
                </div>
                <div>
                    <label>Valor: </label>
                    <input type="password" name="Valor" id='Valor' value={atendimento.Valor} onChange={handleChange} />
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