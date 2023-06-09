import { useState, useEffect} from "react";
import React from 'react'

import Contact  from '../Components/Contact';
import Join from '../Components/Join';
import Store from '../Redux/Store' 
import {ACTION_SHOW_PRODUCT} from '../Redux/Actions/ProductAction'
import Product_list from "../Extra-files/ProductList";
import './ProductByCate.css'
import SideBar from "../Components/SideBaar";

const Products = (props) => {

    const loginStatus = localStorage.getItem('loginstatus')
    const userId =  localStorage.getItem('user_id')

    const [products,setProducts] = useState([])

    useEffect(()=>{

       if(loginStatus==='0')
       {
        fetch("https://dev.weblaunchpad.in/jandani_jewellers/api/customer/get_all_product_list")
        .then(res => res.json())
        .then(data => {
         const updatedProd= data.result.map((productData)=> {
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
        }
        );

    }

    else {
        fetch("https://dev.weblaunchpad.in/jandani_jewellers/api/customer/get_all_product_list?user_id="+userId)
        .then(res => res.json())
        .then(data => {
            console.log(data)
         const updatedProd= data.result.map((productData)=> {
            if(data.status==='1') {
                localStorage.setItem('product_id', data.result.id)
                 Store.dispatch({...ACTION_SHOW_PRODUCT,payload: {
                    'product_id': data.result.id
                      }})
                     
                    
                return{
                    name : productData.name,
                    image : productData.image,
                    id : productData.id,
                    favorite : productData.favorite
                }
            }
          });
    
          setProducts(updatedProd);
        }
        );
    }
        },[]);

    return(
        <div>
            <div className="productbycate_section">
                <SideBar/>
        <h4>Shop by Products</h4>
        <div className="row">
        <div className="col-md-12">
            <Product_list products={products}/> 
        </div>
        </div>
        </div>
        <div><Join/></div>
          <div><Contact/></div>
        </div>
    )
}
export default Products;