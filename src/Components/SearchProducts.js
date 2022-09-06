import { useState , useEffect} from "react";
import React from "react";

import Search_list from "../Extra-files/SearchBarList";
import '../Pages/Products.css'
import Dialog from "./Dailogue";

const SearchProduct = (props) => {
    
    const [products,setProducts] = useState([])
    
    const userId = localStorage.getItem('user_id');
    const keyWord = localStorage.getItem('keyValue')

    useEffect(()=>{
      fetch('https://dev.weblaunchpad.in/jandani_jewellers/api/customer/search-product?user_id='+userId+"&key_word="+keyWord)
      .then(res => res.json())
      .then(data => {
        console.log(data)
         const updatedProd= data.result.map((productData)=> {
                localStorage.setItem('product_id', data.result.id)
                    return{
                      name : productData.name,
                      id : productData.id,
                  }

            })
        
          setProducts(updatedProd);
        })
      },[]);

        return(

                <Search_list products={products}/> 
        )
    }
    export default SearchProduct;