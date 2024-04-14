import React, { useEffect } from 'react'
import { useState } from 'react';
import Login from './Login';

function Navbar() {
  const [sticky,setSticky]=useState(false);
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>0){
        setSticky(true)
      }
      else{
        setSticky(false)
      }
    }
    window.addEventListener('scroll',handleScroll)
  },[])
  return (
    <>
    <div>
    <div className={`max-w-screen-2x1 container mx-auto md:px-20 px-4 navbar bg-base-100 fixed top-0 left-0 right-0 z-50 ${sticky? "sticky-navbar shadow-md bg-base-200 duration-300":""}`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a href='/'>Home</a></li>
      <li><a href='/Adopt'>Adopt</a></li>
      <li><a>Post</a></li>
      </ul>
    </div>
    <a className=" text-2xl">Petters</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href='/'>Home</a></li>
      <li><a href='/Adopt'>Adopt</a></li>
      <li><a href='/Post'>Post</a></li>
      
    </ul>
  </div>
  <div className="navbar-end">
    <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer btn" onClick={()=>document.getElementById("my_modal_3").showModal()}>Login/Signup</a>
    <Login/>
  </div>
</div>
    </div>
    </>
    
  )
}

export default Navbar