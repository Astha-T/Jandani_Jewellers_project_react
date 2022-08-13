import React from "react"

import './Search_List.css'
import List_Products from  "./ListProducts";

const Search_list = (props) => {

    return (
        <div className='product-list'>
            {props.products.map((prod)=> (
                <List_Products
                name = {prod.name}
                id = {prod.id}
                />
            ))}    
        </div>
    );
};

export default Search_list;