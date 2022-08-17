import React from 'react'
import {Link } from 'react-router-dom'

import './FavProd.css'

const FavProd = (props) => {
   
    const setProductId = () => {
        localStorage.setItem('product_id', props.id)
    }

    return (

        <button onClick={setProductId} className="figure">
          
            <Link to="/singleProduct" ><img className= "productimg" src={props.image}/> 
            </Link>
         <h3>{props.id}</h3>
        <h5><Link to="/singleProduct">{props.name}</Link></h5>
       </button>

    )
}

export default FavProd;
