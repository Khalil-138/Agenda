import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Clientes from './pages/Clientes'
import Atendimento from './pages/Atendimento'
import Home from './pages/Home'
import CreateAtendimento from './pages/Atendimento/create'
import UpdateAtendimento from './pages/Atendimento/update'



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Clientes' element={<Clientes />} />
        <Route path='/create/cliente' element={<CreateUser />} />
        <Route path='/update/cliente' element={<UpdateUser />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
