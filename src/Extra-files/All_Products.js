import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import './Products.css'
import ProductServices from '../Services/ProductServices'
import Dialog from '../Components/Dailogue'

const All_Products = (props) => {
    
    const loginStatus = localStorage.getItem('loginstatus')
    const [msg,setMsg] = useState('')
    const [open,setOpen] = useState(false)
    const [like,setLike] = useState(props.favorite)

    const setProductId = () => {
        localStorage.setItem('product_id', props.id)
    }

    const Like= () => {

    if(loginStatus==='1') {
    
<<<<<<< HEAD
        if(like===0){
=======
        if(like==='0'){
>>>>>>> 747834d17b718f7bc2168f89cc92ae45c4696d6f
          ProductServices.Add_fav().then(response=>response.json()).then(data=> {
          console.log(data)
          setOpen(true)
          setMsg(data.message)
          if(data.status==='1')
            {
<<<<<<< HEAD
              setLike(1)
=======
              setLike('1')
>>>>>>> 747834d17b718f7bc2168f89cc92ae45c4696d6f
            }
      })
    }

<<<<<<< HEAD
    else if(like===1) {
=======
    else if(like==='1') {
>>>>>>> 747834d17b718f7bc2168f89cc92ae45c4696d6f
        ProductServices.Remove_fav().then(response=>response.json()).then(data=> {
          console.log(data)
          setOpen(true)
          setMsg(data.message)
          if(data.status==='1')
          {
<<<<<<< HEAD
          setLike(0)
          }
      })
      }
      
}
        }

        const alertmsg = () => {
          setOpen(true)
           setMsg("Please Login to your Account")
        }
        
=======
          setLike('0')
          }
      })
      }
      else {
        setOpen(true)
         setMsg("Please Login to your Account")
    }
}
        }

>>>>>>> 747834d17b718f7bc2168f89cc92ae45c4696d6f
    return (
<div className="col-md-3 col-sm-6 col-6 abc">
<figure className='figureProd' onClick={setProductId}>

<div className="like">
<<<<<<< HEAD
   {loginStatus==='1' && <button className="likebutton" onClick={Like}>
    {like===0 && <span className='fa fa-heart' style={{color : "white", fontSize: '17px'}}/> }                                                   
    {like===1 && <span className='fa fa-heart' style={{color : "red" , fontSize: '17px'}}/>}
    </button>}

    {loginStatus==='0' && 
    <button className="likebutton" onClick={alertmsg}>
    <span className='fa fa-heart' style={{color : "white", fontSize: '17px'}}/>      
    </button>       
    }
=======
      <button className="likebutton" onClick={Like}>
    {like==='0' && <span className='fa fa-heart' style={{color : "white", fontSize: '17px'}}/> }                                                   
    {like==='1' && <span className='fa fa-heart' style={{color : "red" , fontSize: '17px'}}/>}
    </button>
>>>>>>> 747834d17b718f7bc2168f89cc92ae45c4696d6f
    </div>
    <Dialog open={open} onClose={(e) => setOpen(false)}>
    {msg}
    </Dialog>
    
   
    <Link onClick={setProductId} to="/singleProduct" >
            {/* <p className= 'circle'> */}
            <img src={props.image}/>
            {/*</p> */}
        </Link>
        </figure>
   <h3>{props.id}</h3>
   <h3>{props.favorite}</h3>
   <h5 style={{color: 'black'}}><Link  onClick={setProductId} to="/singleProduct">{props.name}</Link></h5>
   </div>
    )
}

export default All_Products;