import React from 'react'

function Card({item}) {
    
  return (
    <>
    <div className='mt-10 my-4'>
    <div className="card w-96 bg-base-100 shadow-xl hover:scale-105">
  <figure><img src={item.image}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Stray Dogs !😊 
      {/* <div className="badge badge-secondary">NEW</div> */}
    </h2>
    <p>Let's make some more Paws happy!!!</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Adopted</div> 
      <div className="badge badge-outline">{item.state}</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Card