import { useState} from "react";
import React from 'react'

import Store from '../Redux/Store' 
import {ACTION_SHOW_PRODUCT} from '../Redux/Actions/ProductAction'
import Product_list from "../Extra-files/Product_list";
import ProductServices from "../Services/ProductServices";
import './Products.css'
import SideBar from "../Components/SideBaar";

const Products = (props) => {
    
    const [products,setProducts] = useState([])

       ProductServices.Get_Products().then((response)=>response.json()).then(data=> {

         const updatedProd= data.result.map((productData)=> {
            if(data.status==='1') {
                localStorage.setItem('product_id', data.result.id)
                 Store.dispatch({...ACTION_SHOW_PRODUCT,payload: {
                    'product_id': data.result.id
                      }})
                    }
                return{
                    name : productData.name,
                    image : productData.image,
                    id : productData.id
                }
            
          })
    
          setProducts(updatedProd);
        }
        )

    return(
            <div className="category_section">
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
export default Products;