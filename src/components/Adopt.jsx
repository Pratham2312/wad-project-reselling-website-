import React from 'react';
import Card from './Card';
import list from "../../public/list.json"
function Adopt() {
  console.log(list);
  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2x1 font-bold md:text-4x1'>helooscjd Lorem ipsum dolor sit amet. <span className='text-pink-500'>dhdfjd</span></h1>
        <p className='mt-12'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus quos sequi maiores minima possimus necessitatibus. Dolorem repellat maiores, magni voluptates, minus ut non voluptas ullam incidunt, a dolorum numquam accusamus! Debitis perspiciatis, corrupti odio corporis soluta natus voluptates ut aliquid fugit quo alias ea consequuntur animi rem necessitatibus. Officiis?
        </p>
      </div>
      {

      }
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {
         list.map((item)=>(
          <Card key={item.id} item={item}/>
         ))
          
        }
      </div>
    </div>
    </>
  )
}

export default Adopt