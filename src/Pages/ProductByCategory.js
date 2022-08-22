import { useState, useEffect} from "react";
import React from "react";

import Product_list from "../Extra-files/Product_list";
import Store from '../Redux/Store'
import {ACTION_SHOW_PRODUCT} from '../Redux/Actions/ProductAction'
import './Products.css'
import SideBar from "../Components/SideBaar";

const ProductsByCate = (props) => {
    
    const [products,setProducts] = useState([])

    const categoryId = localStorage.getItem('category_id'); 
        console.log(categoryId)
    useEffect(()=>{
        fetch('https://dev.weblaunchpad.in/jandani_jewellers/api/customer/get_product_by_category?category_id='+categoryId)
        .then(res => res.json())
        .then(data => {
         const updatedProd= data.result.map((productData)=> {
            console.log(data)
            if(data.status==='1') {
                localStorage.setItem('product_id', data.result.id)
                 Store.dispatch({...ACTION_SHOW_PRODUCT,payload: {
                    'product_id': data.result.id
                      }})
                return{
                    name : productData.name,
                    image : productData.image,
                    id : productData.id
                }
            }
            });
        
          setProducts(updatedProd);
        })
    },[]);

    return(
        <div className="product_section">
            <SideBar/>
        <h4>Shop by Products</h4>
        <div className="row">
        <div className="col-md-12">
            <Product_list products={products}/> 
        </div>
        </div>
        </div>
    )
}
export default ProductsByCate;