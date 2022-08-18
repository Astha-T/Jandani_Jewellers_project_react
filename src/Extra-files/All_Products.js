import React from 'react'
import {Link } from 'react-router-dom'
import './Products.css'
import LikeButton from '../Components/LikeButton'

const All_Products = (props) => {
   
    const setProductId = () => {
        localStorage.setItem('product_id', props.id)
    }

    return (
<span className='span'>
        <button onClick={setProductId} className="figure">
            <LikeButton/>
        <Link to="singleProduct" >
            <p className='circle'>
            <img className= "productimg" src={props.image}/></p> 
        </Link>
   </button>
   <h3>{props.id}</h3>
   <h5 style={{color: 'black'}}><Link to="singleProduct">{props.name}</Link></h5>
   </span>


    )
}

export default All_Products;