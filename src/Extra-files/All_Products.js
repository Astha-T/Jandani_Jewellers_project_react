import React from 'react'
import {Link } from 'react-router-dom'
import './Products.css'
import LikeButton from '../Components/LikeButton'

const All_Products = (props) => {
   
    const setProductId = () => {
        localStorage.setItem('product_id', props.id)
    }

    return (

        <button onClick={setProductId} className="figure">
            <LikeButton/>
            <Link to="/jandani_jewellers_react/singleProduct" ><img className= "productimg" src={props.image}/> 
            </Link>
         <h3>{props.id}</h3>
        <h5><Link to="/jandani_jewellers_react/singleProduct">{props.name}</Link></h5>
       </button>

    )
}

export default All_Products;