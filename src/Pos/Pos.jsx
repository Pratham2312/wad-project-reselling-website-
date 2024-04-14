import React from 'react';
import Navbar from '../components/Navbar';
import Post from '../components/Post';
import Footer from '../components/Footer';

export default function Pos() {
  return (
    
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Post/>
    </div>
    <Footer/>
    </>
  )
}
