import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import Home from "../home/Home"

const Rutas = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Rutas
