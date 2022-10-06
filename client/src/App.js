import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react'
import Home from './pages/home'
import Login from './pages/login'
import DangKy from './pages/dangky'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/login' exact element={<Login/>}/>
            <Route path='/dangky' exact element={<DangKy/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App

