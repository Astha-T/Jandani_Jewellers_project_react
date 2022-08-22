import React from 'react'
import {Link } from 'react-router-dom'
import './Products.css'
import LikeButton from '../Components/LikeButton'

const All_Products = (props) => {
   
    const setProductId = () => {
        localStorage.setItem('product_id', props.id)
    }

    return (
<div className="col-md-2 col-sm-6 col-6">
<figure>
<LikeButton/>
    <Link onClick={setProductId} to="/singleProduct" >
            {/* <p className= 'circle'> */}
            <img src={props.image}/>
            {/*</p> */}
        </Link>
        </figure>
   <h3>{props.id}</h3>
   <h5 style={{color: 'black'}}><Link to="/singleProduct">{props.name}</Link></h5>
   </div>
    )
}

export default All_Products;