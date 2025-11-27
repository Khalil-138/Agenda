import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Clientes from './pages/Clientes'
import Home from './pages/Home'
import CreateCliente from './pages/Users/create'
import UpdateCliente from './pages/Atendimento/update'
import Atendimento from './pages/Atendimento'
import UpdateAtendimento from './src/pages/Atendimento/update'



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Clientes' element={<Clientes />} />
        <Route path='/create/cliente' element={<CreateCliente />} />
        <Route path='/update/cliente' element={<UpdateCliente />} />
        <Route path='/Atendimento' element={<Atendimento />} />
        <Route path='/create/atendimento' element={<CreateAtendimento />} />
        <Route path='/update/atendimento' element={<UpdateAtendimento />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
