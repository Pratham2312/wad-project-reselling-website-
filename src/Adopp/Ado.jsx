import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Adopt from '../components/Adopt'


function Ado() {
  
  return (
    <>
    <div>
      <Navbar/>
      
      
    <div className='min-h-screen'>
    <Adopt/>
    </div>
    <Footer/>
    </div>
    
    </>
  )
}

export default Ado