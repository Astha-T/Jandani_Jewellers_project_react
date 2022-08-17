import React from "react"

import './Product_list.css'
import FavProd from  "./FavProd"

const FavProdList = (props) => {
    return (
        <div className='product-list'>
            {props.products.map((prod)=> (
                <FavProd
                name = {prod.name}
                image = {prod.image}
                id = {prod.id}
                />
            ))}    
        </div>
    );
};

export default FavProdList;
