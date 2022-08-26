import { useState} from "react";
import React from "react";

import Search_list from "../Extra-files/SearchBarList";
import Store from '../Redux/Store'
import {ACTION_SHOW_PRODUCT} from '../Redux/Actions/ProductAction'
import ProductServices from "../Services/ProductServices";
import '../Pages/Products.css'
import Dialog from "./Dailogue";

const SearchProduct = (props) => {
    
    const [products,setProducts] = useState([])

       ProductServices.Search_ProductbyKeyWord().then((response)=>response.json()).then(data=> {
         const updatedProd= data.result.map((productData)=> {
            console.log(data)
            if(data.status===1) {
                localStorage.setItem('product_id', data.result.id)
                 Store.dispatch({...ACTION_SHOW_PRODUCT,payload: {
                    'product_id': data.result.id
                      }})
                    }

                   else {
                    <Dialog>{data.message}</Dialog>
                   }
                    return{
                      name : productData.name,
                      id : productData.id,
                      image : productData.image
                  }

            })
        
          setProducts(updatedProd);
        })

        return(

                <Search_list products={products}/> 
        )
    }
    export default SearchProduct;