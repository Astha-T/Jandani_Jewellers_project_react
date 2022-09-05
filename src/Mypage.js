import React from 'react'
import "./App.css";
import { Swiper, SwiperSlide } from 'swiper/react';

const Abc = () => {
  return (
    <body>
        <div className='row'>
            <div className='col-md-4'>
            <img alt='' src="https://i.pinimg.com/736x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg" width="100px" height="80px"/>
            </div>
            <div className='col-md-8'>
            <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Careers</li>
            <li>Conatct us</li>
            </ul>
            
            </div>
        </div>

        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    
    </body>
  )
}

export default Abc;