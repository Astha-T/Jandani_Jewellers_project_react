import { useState, useEffect } from "react";
import React from 'react'
import {useNavigate } from 'react-router-dom'
import sanitizeHtml from 'sanitize-html'
import striptags from 'striptags'

import SideBar from "../Components/SideBaar";
import './SingleProduct.css';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import Join from '../Components/Join';
import Contact from "../Components/Contact";
// import Enquiry from "../Components/Enquiry";
// import BookJewellery from "../Components/BookJewellery";
// import GetQuotation from "../Components/GetQuotation";
// import BooKAppointment from "../Components//BooKAppointment";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Pagination } from "swiper";

const SingleProduct = (props) => {
  const navigate = useNavigate();
  const loginStatus = localStorage.getItem('loginstatus')
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [displayProductName, setDisplayProductName] = useState('');
  const [displayProductImage, setDisplayProductImage] = useState();
  const [displayProductDes, setDisplayProductDes] = useState('');
  const userId = localStorage.getItem('user_id');
  const productId = localStorage.getItem('product_id');

  console.log(productId,userId)
  useEffect(() => {

    if(loginStatus==='0') {
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

      })}

      else if(loginStatus==='1'){
        fetch('https://dev.weblaunchpad.in/jandani_jewellers/api/customer/get_single_product?product_id='+productId+'&user_id='+userId)
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

      })}
      
  }, [productId,userId])

  return (
    <>
      <SideBar />
      <div className='d-flex justify-content-center align-items-center btndiv'>
      <button onClick={() => navigate(-1)} className="prevBtn" ><span className="fa fa-arrow-left"/></button>
    <button onClick={() => navigate(+1)} className="nextBtn" ><span className="fa fa-arrow-right"/></button>
    </div>
      <div className="container">
        <div className="row slider_row">
        <div className="col-md-12">
        <h4 className="producttitle">{displayProductName}</h4>
        
        </div>
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
          <hr className="hr"/>
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
      {/*<Join/>*/}
      <Contact />
    </>
  )

}

export default SingleProduct;