import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import './Products.css'
import LikeButton from '../Components/LikeButton'
import DislikeButton from '../Components/DisLikeButton'

const All_Products = (props) => {
    
   
    const setProductId = () => {
        localStorage.setItem('product_id', props.id)
    }

    return (
<div className="col-md-3 col-sm-6 col-6 abc">
<figure className='figureProd' onClick={setProductId}>

 {props.favorite==='0' && <LikeButton/>}
 {props.favorite==='1' && <DislikeButton/>}
   
    <Link onClick={setProductId} to="/singleProduct" >
            {/* <p className= 'circle'> */}
            <img src={props.image}/>
            {/*</p> */}
        </Link>
        </figure>
   <h3>{props.id}</h3>
   <h3>{props.favorite}</h3>
   <h5 style={{color: 'black'}}><Link  onClick={setProductId} to="/singleProduct">{props.name}</Link></h5>
   </div>
    )
}

export default All_Products;