import React from 'react'
import {Link } from 'react-router-dom'
import './ListProduct.css'
const List_Products = (props) => {
   
    const setProductId = () => {
        localStorage.setItem('product_id', props.id)
    }

    return (

        <button onClick={setProductId} className="prod">
            <Link to="/singleProduct" >
                <h3>{props.id}</h3>
                <h5>{props.name}</h5>
            </Link>
       </button>

    )
}

export default List_Products;