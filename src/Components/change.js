import React , {useState, useEffect} from 'react'
import './add.css'

const  SliderApp =() =>{

  const [displayProductName, setDisplayProductName] = useState('');
 const [displayProductImage,setDisplayProductImage] = useState();
 const [displayProductDes,setDisplayProductDes] = useState('');

 const productId = localStorage.getItem('product_id');
    console.log(productId)
useEffect(()=>{
  fetch('https://dev.weblaunchpad.in/jandani_jewellers/api/customer/get_single_product?product_id='+productId)
  .then(res => res.json())
  .then(data => {
       console.log(data)

       const updatedproductImage = data.result.image
       setDisplayProductImage(updatedproductImage) 

       const updatedproductName = data.result.name
       setDisplayProductName(updatedproductName)

       const updatedDescription = data.result.description
       setDisplayProductDes(updatedDescription)
       
    })
  },[productId])
      return(
        <div class="container">
          <div class="thumbnail-buttons">
            <a href="#ilovejs"><img src={displayProductImage} /></a>
            <a href="#messeks"><img src={displayProductImage}/></a>
            <a href="#snowman"><img src={displayProductImage} /></a>
            <a href="#ilovejs"><img src={displayProductImage} /></a>
          </div>
          <div class="slider">
            <figure>
              <img src={displayProductImage} id="ilovejs" />
              <img src={displayProductImage} id="meseeks" />
              <img src={displayProductImage} id="snowman" />
            </figure>
          </div>
          
        </div>
      )
    }
  
  
  const app = document.getElementById("app")
  

  export default SliderApp;