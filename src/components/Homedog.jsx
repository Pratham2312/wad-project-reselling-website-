import React from 'react';
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';

function Homedog() {
    const fliterData=list.filter((data)=>data.category==="Free")
    console.log(fliterData);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
   <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
        <h1 className='font-bold text-x pb-2 text-center'>Recent Adoptions</h1>
        <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
        <Slider {...settings}>
        {fliterData.map((item)=>(
            <Card item={item} key={item.id}/>
        ))}
      </Slider>

        </div>



    </div>
   </>
  )
}

export default Homedog