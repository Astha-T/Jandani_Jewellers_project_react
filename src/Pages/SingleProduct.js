import { useState , useEffect} from "react";
import React from 'react'
import {Link} from 'react-router-dom'

import SideBar from "../Components/SideBaar";
import './SingleProduct.css';
import Contact from "../Components/Contact";
import Enquiry from "../Components/Enquiry";
import BookJewellery from "../Components/BookJewellery";
import GetQuotation from "../Components/GetQuotation";
import BooKAppointment from "../Components//BooKAppointment";

const SingleProduct = (props) => {

 const [displayProductName, setDisplayProductName] = useState('');
 const [displayProductImage,setDisplayProductImage] = useState();
 const [displayProductDes,setDisplayProductDes] = useState('');

 const productId = localStorage.getItem('product_id');
    console.log(productId)
useEffect(()=>{
  fetch('https://dev.weblaunchpad.in/jandani_jewellers/api/customer/get_single_product?product_id='+productId)
  .then(res => res.json())
  .then(data => {
       console.log(data)

       const updatedproductImage = data.result.image
       setDisplayProductImage(updatedproductImage) 

       const updatedproductName = data.result.name
       setDisplayProductName(updatedproductName)

       const updatedDescription = data.result.description
       setDisplayProductDes(updatedDescription)
       
    })
  },[productId])

    return(
        <div className="singleProduct">
           <SideBar/>
            <h2>Product Details</h2>
           <div className="details_section">
    
    <div className="row">
      <div className="col-md-6 col-12 slider_col">
        <div className="container-fluid  product">
          <div className="carousel-container position_banner row">

            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-slide-number="0">
                  <img src={displayProductImage} className="d-block " alt="..."
                    data-remote={displayProductImage} data-type="image" data-toggle="lightbox"
                    data-gallery="example-gallery"/>
                </div>
                <div className="carousel-item" data-slide-number="1">
                  <img src={displayProductImage} className="d-block " alt="..."
                    data-remote={displayProductImage} data-type="image" data-toggle="lightbox"
                    data-gallery="example-gallery"/>
                </div>
                <div className="carousel-item" data-slide-number="2">
                  <img src={displayProductImage} className="d-block " alt="..."
                    data-remote={displayProductImage} data-type="image" data-toggle="lightbox"
                    data-gallery="example-gallery"/>
                </div>
                <div className="carousel-item" data-slide-number="3">
                  <img src={displayProductImage} className="d-block " alt="..."
                    data-remote={displayProductImage} data-type="image" data-toggle="lightbox"
                    data-gallery="example-gallery"/>
                </div>
                <div className="carousel-item" data-slide-number="4">
                  <img src={displayProductImage} className="d-block " alt="..."
                    data-remote={displayProductImage} data-type="image" data-toggle="lightbox"
                    data-gallery="example-gallery"/>
                </div>
                <div className="carousel-item" data-slide-number="5">
                  <img src={displayProductImage} className="d-block " alt="..."
                    data-remote={displayProductImage} data-type="image" data-toggle="lightbox"
                    data-gallery="example-gallery"/>
                </div>
                <div className="carousel-item" data-slide-number="6">
                  <img src={displayProductImage} className="d-block " alt="..."
                    data-remote={displayProductImage} data-type="image" data-toggle="lightbox"
                    data-gallery="example-gallery"/>
                </div>
                <div className="carousel-item" data-slide-number="7">
                  <img src={displayProductImage} className="d-block " alt="..."
                    data-remote={displayProductImage} data-type="image" data-toggle="lightbox"
                    data-gallery="example-gallery"/>
                </div>
                <div className="carousel-item" data-slide-number="8">
                              <img src={displayProductImage} className="d-block " alt="..." data-remote={displayProductImage} data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
                            </div>
                            <div className="carousel-item" data-slide-number="9">
                              <img src={displayProductImage} className="d-block " alt="..." data-remote={displayProductImage} data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
                            </div>
              </div>
            </div>

            <div id="carousel-thumbs" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row mx-0">
                    <div id="carousel-selector-0" className="thumb col-4 col-sm-3 col-3 selected" data-target="#myCarousel"
                      data-slide-to="0">
                      <img src={displayProductImage} className="img-fluid" alt="..."/>
                    </div>
                    <div id="carousel-selector-1" className="thumb col-4 col-sm-3 col-3" data-target="#myCarousel"
                      data-slide-to="1">
                      <img src={displayProductImage} className="img-fluid" alt="..."/>
                    </div>
                    <div id="carousel-selector-2" className="thumb col-4 col-sm-3 col-3" data-target="#myCarousel"
                      data-slide-to="2">
                      <img src={displayProductImage} className="img-fluid" alt="..."/>
                    </div>
                    <div id="carousel-selector-3" className="thumb col-4 col-sm-3 col-3" data-target="#myCarousel"
                      data-slide-to="3">
                      <img src={displayProductImage} className="img-fluid" alt=".../"/>
                    </div>
                   <div id="carousel-selector-4" className="thumb col-4 col-sm-3 " data-target="#myCarousel" data-slide-to="4">
                                  <img src={displayProductImage} className="img-fluid" alt="..."/>
                                </div>
                                <div id="carousel-selector-5" className="thumb col-4 col-sm-3 " data-target="#myCarousel" data-slide-to="5">
                                  <img src={displayProductImage} className="img-fluid" alt="..."/>
                                </div> 
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row mx-0">
                    <div id="carousel-selector-4" className="thumb col-4 col-sm-3 col-3" data-target="#myCarousel"
                      data-slide-to="4">
                      <img src={displayProductImage} className="img-fluid" alt="..."/>
                    </div>
                    <div id="carousel-selector-5" className="thumb col-4 col-sm-3 col-3" data-target="#myCarousel"
                      data-slide-to="5">
                      <img src={displayProductImage} className="img-fluid" alt="..."/>
                    </div>
                    <div id="carousel-selector-6" className="thumb col-4 col-sm-3 col-3" data-target="#myCarousel"
                      data-slide-to="6">
                      <img src={displayProductImage} className="img-fluid" alt="..."/>
                    </div>
                    <div id="carousel-selector-7" className="thumb col-4 col-sm-3 col-3" data-target="#myCarousel"
                      data-slide-to="7">
                      <img src={displayProductImage} className="img-fluid" alt="..."/>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-2 "></div>
        
                  </div>
                </div>
              </div>
              <Link className="carousel-control-prev" to="#carousel-thumbs" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
             </Link>
              <Link className="carousel-control-next" to="#carousel-thumbs" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
             </Link>
            </div>

          </div>
        </div>
      
      </div>

      <div className="col-md-6 col-12 slider_txt">
        <h4>{displayProductName}</h4>
        <p>{displayProductDes}</p>
          <Enquiry/>   
          <GetQuotation/>
          <BookJewellery/> 
          <BooKAppointment/>
      </div>
      </div>



    </div>
     <Contact/>
  </div>
    )

}

export default SingleProduct;