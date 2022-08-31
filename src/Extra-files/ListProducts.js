import React from 'react'
import {Link, Navigate } from 'react-router-dom'
import './ListProduct.css'
const List_Products = (props) => {
   
    const setProductId = () => {
        localStorage.removeItem('product_id')
        window.location.reload(true)
        localStorage.setItem('product_id', props.id)
    }

    return (

        <button onClick={setProductId} className="prod">
          <li className='li'>  <Link to="/singleProduct" >
                <h3>{props.id}</h3>
                <h6 className='h5'>{props.name}</h6>
            </Link></li>
       </button>

    )
}

export default List_Products;