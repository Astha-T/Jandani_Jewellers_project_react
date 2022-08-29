import React from "react"

import './Product_list.css'
import All_Productsbycate from  "./All_Productsbycate";

const Productbycate_list = (props) => {
    return (
        <div className='product-list row'>
            {/* <div className="col-md-1 d-sm-block d-none"></div> */}
         <div className="col-md-1 d-sm-block d-none"></div>

            {props.products.map((prod)=> (
                <All_Productsbycate
                name = {prod.name}
                image = {prod.image}
                id = {prod.id}
                favorite = {prod.favorite}
                />
            ))}    

        {/* <div className="col-md-1 d-sm-block d-none"></div>       */}

        <div className="col-md-1 d-sm-block d-none"></div>      
        </div>
    );
};

export default Productbycate_list;