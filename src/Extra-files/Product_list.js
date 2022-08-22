import React from "react"

import './Product_list.css'
import All_Products from  "./All_Products";

const Product_list = (props) => {
    return (
        <div className='product-list row'>
            <div className="col-md-1 d-sm-block d-none"></div>
            {props.products.map((prod)=> (
                <All_Products
                name = {prod.name}
                image = {prod.image}
                id = {prod.id}
                />
            ))}    
        <div className="col-md-1 d-sm-block d-none"></div>      
        </div>
    );
};

export default Product_list;