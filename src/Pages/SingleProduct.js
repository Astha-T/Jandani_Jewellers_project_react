import { useState, useEffect } from "react";
import React from 'react'
import { Link } from 'react-router-dom'
import sanitizeHtml from 'sanitize-html'
import striptags from 'striptags'

import SideBar from "../Components/SideBaar";
import './SingleProduct.css';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Join from '../Components/Join';
import Contact from "../Components/Contact";
import Enquiry from "../Components/Enquiry";
import BookJewellery from "../Components/BookJewellery";
import GetQuotation from "../Components/GetQuotation";
import BooKAppointment from "../Components//BooKAppointment";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Pagination } from "swiper";

const SingleProduct = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [displayProductName, setDisplayProductName] = useState('');
  const [displayProductImage, setDisplayProductImage] = useState();
  const [displayProductDes, setDisplayProductDes] = useState('');

  const productId = localStorage.getItem('product_id');
  console.log(productId)
  useEffect(() => {
    fetch('https://dev.weblaunchpad.in/jandani_jewellers/api/customer/get_single_product?product_id=' + productId)
      .then(res => res.json())
      .then(data => {
        console.log(data)

        const updatedproductImage = data.result.image
        setDisplayProductImage(updatedproductImage)

        const updatedproductName = data.result.name
        setDisplayProductName(updatedproductName)

        const updatedDescription = data.result.description
        const text = sanitizeHtml(updatedDescription)
        const finaltext = striptags(text)
        setDisplayProductDes(finaltext)

      })
  }, [productId])

  return (
    <>
      <SideBar />

      <div className="container">
        <div className="row slider_row">
          <div className="col-md-6">

            <Swiper
              style={{
                "--swiper-navigation-color": "black",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide className="swiper_img">
                <div className=""><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide>
              <SwiperSlide className="swiper_img">
                <div className=""><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide>
              <SwiperSlide className="swiper_img">
                <div className=""><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide>
              <SwiperSlide className="swiper_img">
                <div className=""><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide>
              <SwiperSlide className="swiper_img">
                <div className=""><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide>
              <SwiperSlide className="swiper_img">
                <div className=""><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide>

            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide className="option_img">
                <div><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide>
              <SwiperSlide className="option_img">
                <div><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide>
              <SwiperSlide className="option_img">
                <div><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide>
              <SwiperSlide className="option_img">
                <div><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide >
              <SwiperSlide className="option_img">
                <div><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide>
              <SwiperSlide className="option_img">
                <div><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide>

            </Swiper>






          </div>
          <div className="col-md-6 slider_txt ">
            <h4 className="">{displayProductName}</h4>
            <p className="pro_detail">{displayProductDes}</p>
            {/* <ul className="buton_lst">
          <li><Enquiry/></li>   
          <li className="sec_btn"><GetQuotation/></li>
          <li><BookJewellery/></li> 
          <li className="frth_btn"><BooKAppointment/></li>
          </ul> */}
          </div>
        </div>

      </div>
      <Join/>
      <Contact />
    </>
  )

}

export default SingleProduct;