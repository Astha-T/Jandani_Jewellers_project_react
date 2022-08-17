iimport { useState} from "react";
import React from 'react'

import SideBar from '../Components/SideBaar'
import FavProdList from "../Extra-files/FavProdList";
import ProductServices from "../Services/ProductServices";
import './FavouriteProducts.css'

const FavouriteProducts = () => {
    
    const [products,setProducts] = useState([])

        const imgurl = 'https://dev.weblaunchpad.in/jandani_jewellers/public/product/';

       ProductServices.Get_FavoriteProducts().then((response)=>response.json()).then(data=> {
        console.log(data) 
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

    return(
        <div>
            <SideBar/>
        <div className="favProd">
            <h2>YOUR FAVOURITE PRODUCTS</h2>
            <FavProdList products={products}/> 
        </div>
        </div>
    )
}
export default FavouriteProducts;
