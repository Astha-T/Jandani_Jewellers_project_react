import React from "react"

import './Product_list.css'
import All_Products from  "./All_Products";

const Product_list = (props) => {
    return (
        <div className='product-list row'>
<<<<<<< HEAD
            {/* <div className="col-md-1 d-sm-block d-none"></div> */}
=======
            <div className="col-md-1 d-sm-block d-none"></div>
>>>>>>> c6230da2a65090dc862c19683f43d48923176048
            {props.products.map((prod)=> (
                <All_Products
                name = {prod.name}
                image = {prod.image}
                id = {prod.id}
                />
            ))}    
<<<<<<< HEAD
        {/* <div className="col-md-1 d-sm-block d-none"></div>       */}
=======
        <div className="col-md-1 d-sm-block d-none"></div>      
>>>>>>> c6230da2a65090dc862c19683f43d48923176048
        </div>
    );
};

export default Product_list;