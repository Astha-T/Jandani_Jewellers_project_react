import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

import Productbycate_list from "../Extra-files/Productbycate_list";
import Contact  from '../Components/Contact';
// import Join from '../Components/Join';
// import Product_list from "../Extra-files/Product_list";

import './ProductByCate.css'
import SideBar from "../Components/SideBaar";

const ProductsByCate = (props) => {
    
    const [products,setProducts] = useState([])

    const categoryId = localStorage.getItem('category_id'); 
    const userId =  localStorage.getItem('user_id')
    const loginStatus = localStorage.getItem('loginstatus')

    const navigate = useNavigate();

    useEffect(()=>{
        if(loginStatus==='0')
        {
        fetch('https://dev.weblaunchpad.in/jandani_jewellers/api/customer/get_product_by_category?category_id='+categoryId)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
         const updatedProd= data.result.map((productData)=> {
            if(data.status==='1') {
                localStorage.setItem('product_id', data.result.id)
                
                return{
                    name : productData.name,
                    image : productData.image,
                    id : productData.id
                }
            }
           
            });
        
          setProducts(updatedProd);
        })
    }
    else {
        fetch('https://dev.weblaunchpad.in/jandani_jewellers/api/customer/get_product_by_category?category_id='+categoryId+'&user_id='+userId)
        .then(res => res.json())
        .then(data => {
            console.log(data)
         const updatedProd= data.result.map((productData)=> {
            if(data.status==='1') {
                localStorage.setItem('product_id', data.result.id)
        
                return{
                    name : productData.name,
                    image : productData.image,
                    id : productData.id,
                    favorite : productData.favorite
                }
                
            }
            });
        
          setProducts(updatedProd);
        })  
    }  
    },[]);

    return(
        <div>
        <div className="productbycate_section">
        
            <SideBar/>
            <div className='d-flex justify-content-center align-items-center btndiv'>
          <button onClick={() => navigate(-1)} className="prevBtn" ><span className="fa fa-arrow-left"/> Prev</button>
        <button  className="disabled" ><span className="fa fa-arrow-right"/> Next</button>
        </div>
        <h4>Shop by Products</h4>
        <div className="row">
        
            <Productbycate_list products={products}/> 
        </div>
        </div>
        {/*<div><Join/></div>*/}
        <div><Contact/></div>
        </div>
    )
}
export default ProductsByCate;