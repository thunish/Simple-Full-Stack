import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import SendMoney from './pages/SendMoney'
import {  BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/signin' element={<Signin></Signin>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/transaction' element={<SendMoney></SendMoney>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
