import { useEffect, useState } from 'react'
import { deleteCliente, getClientes } from '../../api/clientes'
import { Link, useNavigate } from 'react-router-dom'
import './styles.css'
import { toast } from 'react-toastify'

function Clientes() {
    const navigate = useNavigate()
    const [Clientes, setClientes] = useState([])

    const handleUpdate = async (cliente) => {
        navigate('/update/cliente', { state: { cliente } })
    }

    const handleDelete = async (id) => {
        const response = await deleteCliente(id)

        if (response.status !== 204) {
            toast("Erro ao deletar, tente novamente, mais tarde")
            return
        }

        setClientes(Clientes => Clientes.filter(cliente => cliente.id !== id))
    }

    useEffect(() => {
        async function carregar() {
            const allClientes = await getClientes()
            setClientes(allClientes)
        }
        carregar()
    }, [])

    return (
        <main>
            <div className='cliente-list'>
                <Link to={'/create/cliente'}>
                    <button>Criar</button>
                </Link>
                <div className='cliente header' key='header'>
                    <label>Nome</label>
                    <label>Email</label>
                    <label>Ações</label>
                </div>
                {
                    Clientes.length == 0
                        ? <div className='cliente'>
                            <label>Não tem ngm</label>
                        </div>
                        : Clientes.map(cliente =>
                            <div className='cliente' key={cliente.id}>
                                <label>{cliente.nome}</label>
                                <label>{cliente.email}</label>
                                <div className='actions'>
                                    <button
                                        type='button'
                                        onClick={() => handleUpdate(cliente)}
                                    >Alterar</button>
                                    <button
                                        type='button'
                                        onClick={() => handleDelete(cliente.id)}
                                    >Deleta</button>
                                </div>
                            </div>)
                }
            </div>
        </main>
    )
}

export default Clientes
