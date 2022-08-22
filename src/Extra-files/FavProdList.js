import React from "react"

import './Product_list.css'
import FavProd from  "./FavProd"

const FavProdList = (props) => {
    return (
        <div className='product-list row'>
            {/* <div className="col-md-1 d-sm-block d-none"></div> */}
            {props.products.map((prod)=> (
                <FavProd
                name = {prod.name}
                image = {prod.image}
                id = {prod.id}
                />
            ))}    
        {/* <div className="col-md-1 d-sm-block d-none"></div>       */}
        </div>
    );
};

export default FavProdList;
