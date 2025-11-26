import { useState } from "react"
import { CreateCliente } from "../../api/clientes";
import { useNavigate } from "react-router-dom";
import './styles.css'

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: ''
}

export default function CreateCliente() {
    const navigate = useNavigate()
    const [cliente, setcliente] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { id, value } = e.target;
        setcliente({
            ...cliente,
            [id]: value
        })
    }

    const handleReset = (e) => {
        e.preventDefault()
        setcliente(INITIAL_STATE)
    }

    const handleSave = async (e) => {
        e.preventDefault()
        // seria idela validar os valores do objeto antes de enviar
        const response = await CreateCliente(cliente)

        if (response.status === 201) {
            navigate('/clientes')
        } else {
            console.log(response)
        }
    }

    return (
        <div className="form">
            <form>
                <div>
                    <label>Nome: </label>
                    <input type="text" name="nome" id='nome' value={cliente.nome} onChange={handleChange} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" id='email' value={cliente.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Senha: </label>
                    <input type="password" name="senha" id='senha' value={cliente.senha} onChange={handleChange} />
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