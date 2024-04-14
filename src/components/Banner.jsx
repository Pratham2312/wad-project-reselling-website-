import React from 'react';
import banner from '../../public/Banner.jpeg';
import {Link} from "react-router-dom"

function Banner() {
  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center my-10'>
        <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
            <div className='space-y-10'>
                <h1 className='text-4x1 font-bold'>Hello Lorem ipsum dolor sit amet. <span className='text-pink-500'>okay</span></h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error id alias, earum eligendi, laborum non repellat consequuntur fugit consectetur corporis ipsa facere ducimus maiores quibusdam eaque, aspernatur nihil dolorum inventore amet itaque? Repellat officiis ipsam natus voluptatem dolor deleniti, sequi, quibusdam facilis quis, nesciunt nisi eos nulla? Perferendis, modi aliquam?</p>

             <Link to="/Adopt">
             <button className="btn btn-outline btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg">Adopt</button>
             </Link>   
            </div>
        </div>
        <div className=' order-1 w-full md:w-1/2 flex justify-center'>
            <img src={banner} className='space-y-90 w-250 h-250' alt="" />
        </div>
    </div>
</>

  )
}

export default Banner
