import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

import './Slider.css'

const Slider = () => {
    return (
        <div className="sec_section">
            <div className="row">
                <div className="col-md-12 banner">

                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        autoplay={{delay:5000}}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>    <img src={require('./images/banner_jwellry.jpg')} alt="img"/></SwiperSlide>
                        <SwiperSlide> <img src={require('./images/banner_jwellry2.jpg')} alt="img"/></SwiperSlide>
                        <SwiperSlide>  <img src={require('./images//banner_jwellry3.jpg')} alt="img"/></SwiperSlide>
                      
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Slider;