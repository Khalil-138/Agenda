import { useEffect, useState } from 'react'
import { deleteAtendimento, getAtendimentos } from '../../api/atendimentos'
import { Link, useNavigate } from 'react-router-dom'
import './styles.css'
import { toast } from 'react-toastify'

function atendimentos() {
    const navigate = useNavigate()
    const [atendimentos, setAtendimentos] = useState([])

    const handleUpdate = async (atendimento) => {
        navigate('/update/atendimento', { state: { atendimento } })
    }

    const handleDelete = async (id) => {
        const response = await deleteAtendimento(id)

        if (response.status !== 204) {
            toast("Erro ao deletar, tente novamente, mais tarde")
            return
        }

        setAtendimentos(atendimentos => atendimentos.filter(atendimento => atendimento.id !== id))
    }

    useEffect(() => {
        async function carregar() {
            const allAtendimentos = await getAtendimentos()
            setAtendimentos(allAtendimentos)
        }
        carregar()
    }, [])

    return (
        <main>
            <div className='atendimento-list'>
                <Link to={'/create/atendimento'}>
                    <button>Criar</button>
                </Link>
                <div className='atendimento header' key='header'>
                    <label>Nome</label>
                    <label>Email</label>
                    <label>Ações</label>
                </div>
                {
                    atendimentos.length == 0
                        ? <div className='atendimento'>
                            <label>Não tem ngm</label>
                        </div>
                        : atendimentos.map(atendimento =>
                            <div className='atendimento' key={atendimento.id}>
                                <label>{atendimento.nome}</label>
                                <label>{atendimento.email}</label>
                                <div className='actions'>
                                    <button
                                        type='button'
                                        onClick={() => handleUpdate(atendimento)}
                                    >Alterar</button>
                                    <button
                                        type='button'
                                        onClick={() => handleDelete(atendimento.id)}
                                    >Deleta</button>
                                </div>
                            </div>)
                }
            </div>
        </main>
    )
}

export default atendimentos
