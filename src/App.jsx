import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Home/Home'
import Ado from './Adopp/Ado'
import Signup from './components/Signup'
import Login from './components/Login'
import Pos from './Pos/Pos'


function App() {
  return (
    <>
{/*     
    <Home/>
    <Adopt/> */}
    {/* <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/Adopt" element={<Adopt/>}/>

    </Routes> */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/Adopt' element={<Ado/>}/>
      <Route path='/Post' element={<Pos/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>

    </>
  )
}

export default App