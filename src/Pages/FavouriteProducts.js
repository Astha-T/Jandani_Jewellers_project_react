import { useState , useEffect } from "react";
import React from 'react'

import SideBar from '../Components/SideBaar'
import FavProdList from "../Extra-files/FavProdList";
import './FavouriteProducts.css'

const FavouriteProducts = () => {
    
    const [products,setProducts] = useState([])

        const imgurl = 'https://dev.weblaunchpad.in/jandani_jewellers/public/product/';
        const userId = localStorage.getItem('user_id');

        useEffect(()=>{
            fetch("https://dev.weblaunchpad.in/jandani_jewellers/api/customer/get_favorite_product?user_id="+userId)
            .then(res => res.json())
            .then(data => {
         const updatedProductList = data.result.map((productData)=> {
                return{
                    id: productData.id,
                    image : imgurl+productData.image,
                    name : productData.name
                }
            }
           )
          setProducts(updatedProductList)
        })
    },[]);

    return(
        <div className="product_section">
                <SideBar/>
        <h4>YOUR FAVOURITE PRODUCUTS</h4>
        <div className="row">
        <div className="col-md-12">
        <FavProdList products={products}/> 
        </div>
        </div>
        </div>
    )
}
export default FavouriteProducts;
