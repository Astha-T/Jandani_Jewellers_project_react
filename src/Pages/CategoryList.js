// import { useState} from "react";
// import React, {Suspense} from 'react'
// import { Provider } from 'react-redux/es/exports';
// import {BrowserRouter, Route, Routes} from 'react-router-dom';

// import LoadingSpinner from '../Components/LoadingSpinner'
// import Store from '../Redux/Store'
// import {ACTION_SHOW_CATEGORY} from '../Redux/Actions/CategoryAction'
// import Cate_List from "../Extra-files/Cate_List";
// import CategoryServices from "../Services/CategoryServices";
// import './CategoryList.css'

// const CategoryList = (props) => {

//      const ProductsByCate = React.lazy(()=> import('./ProductByCategory'))
    
//     const [categories,setcategories] = useState([])

//        CategoryServices.Get_Categories().then((response)=>response.json()).then(data=> {

//          const updatedCate= data.result.map((productData)=> {
//              if(data.status==='1') {
//             localStorage.setItem('category_id', data.result.id)
//              Store.dispatch({...ACTION_SHOW_CATEGORY,payload: {
//                      category_id: data.result.id
//                   }})
//                 return{
//                     id : productData.id,
//                     image : productData.image,
//                     name : productData.name
//                 }
//             }
            
//           })
    
//           setcategories(updatedCate)
//         }
//         )

//      return(
//         <Provider store={Store}>
//         <BrowserRouter basename='/'>
//         <Suspense 
//         fallback={
//           <div className='centered'>
//             <LoadingSpinner />
//           </div>}>
//         <Routes>
//         <Route path="/productbycate_list" element={<ProductsByCate/>}/>
//         </Routes>
//   </Suspense>
//   </BrowserRouter>
  
//         <div className="category_section">
//         <h4>Shop by categories</h4>
//         <div className="row">
//         <div className="col-md-12">
//             <Cate_List categories={categories}/> 
//         </div>
//         </div>
//         </div>
//         // </Provider>
//     )
// }
// export default CategoryList;

import React, { useState, useEffect } from "react";
import Store from '../Redux/Store'
import {ACTION_SHOW_CATEGORY} from '../Redux/Actions/CategoryAction'

import Cate_List from "../Extra-files/Cate_List";
import ProductServices from "../Services/ProductServices";
import './CategoryList.css'

const CategoryList = (props) => {
    
    const [categories,setcategories] = useState([]);
    useEffect(()=>{
        fetch('https://dev.weblaunchpad.in/jandani_jewellers/api/customer/get_category_list')
        .then(res => res.json())
        .then(data => {
            const updatedCate= data.result.map((productData)=> {
                if(data.status==='1') {
               localStorage.setItem('category_id', data.result.id);
                Store.dispatch({...ACTION_SHOW_CATEGORY,payload: {
                        category_id: data.result.id
                     }});
                   return{
                       id : productData.id,
                       image : productData.image,
                       name : productData.name
                   }
               }
             });
             setcategories(updatedCate);
        });
    },[]);

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