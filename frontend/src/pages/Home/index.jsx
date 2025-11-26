import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            Outras informações e um
            <Link to='/Agenda'>
                <button>
                    Navegar para API
                </button>
            </Link>
        </>
    )
}

export default Home