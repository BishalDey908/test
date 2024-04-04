

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Login from './Login'
import Reg from './Reg'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Reg />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
