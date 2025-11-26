import { Link } from 'react-router-dom'
import './style.css'

export default function Header() {
    return (
        <header>
            <h1>Agenda API</h1>
            <nav>
                <Link to='/'>
                    <button>
                        Inicio
                    </button>
                </Link>
                <Link to='/clientes'>
                    <button>
                        API
                    </button>
                </Link>
            </nav>
        </header>
    )
}