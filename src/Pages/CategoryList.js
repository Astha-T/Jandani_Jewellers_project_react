import { useState} from "react";
import React from 'react'
import Store from '../Redux/Store'
import {ACTION_SHOW_CATEGORY} from '../Redux/Actions/CategoryAction'

import Cate_List from "../Extra-files/Cate_List";
import ProductServices from "../Services/ProductServices";
import './CategoryList.css'

const CategoryList = (props) => {
    
    const [categories,setcategories] = useState([])

       ProductServices.Get_Categories().then((response)=>response.json()).then(data=> {

         const updatedCate= data.result.map((productData)=> {
             if(data.status==='1') {
            localStorage.setItem('category_id', data.result.id)
             Store.dispatch({...ACTION_SHOW_CATEGORY,payload: {
                     category_id: data.result.id
                  }})
                return{
                    id : productData.id,
                    image : productData.image,
                    name : productData.name
                }
            }
            
          })
    
          setcategories(updatedCate)
        }
        )

    return(
        <div className="category_section">
        <h4>Shop by categories</h4>
        <div className="row">
        <div className="col-md-12">
            <Cate_List categories={categories}/> 
        </div>
        </div>
        </div>
        
    )
}
export default CategoryList;