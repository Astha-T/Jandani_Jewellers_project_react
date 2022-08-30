import React, { useState } from 'react'

import ProductServices from '../Services/ProductServices'
import Dialog from '../Components/Dailogue'
import './LikeButton.css'

const LikeButton = (props) => {

  const loginStatus = localStorage.getItem('loginstatus')
    const [msg,setMsg] = useState('')
    const [open,setOpen] = useState(false)
    const [like,setLike] = useState(props.favorite)

    const Like= () => {
    
    if(loginStatus==='1') {
    
      if(like==='0'){
        ProductServices.Add_fav().then((response)=>response.json()).then(data=> {
        console.log(data)
        setOpen(true)
        setMsg(data.message)
        if(data.status==='1')
          {
            setLike('1')
          }
    })
  }

  else if(like==='1') {
    ProductServices.Remove_fav().then((response)=>response.json()).then(data=> {
      console.log(data)
      if(data.status===1)
      {
      setLike(true)
      }
      setOpen(true)
      setMsg(data.message)
  })
  }

    }

    else {
        setOpen(true)
         setMsg("Please Login to your Account")
    }
    }

    return (
        <div className="like">
      <button className="likebutton" onClick={Like}>
    {like===true && <span className='fa fa-heart' style={{color : "white", fontSize: '17px'}}/> }                                                   
    {like===false && <span className='fa fa-heart' style={{color : "red" , fontSize: '17px'}}/>}
    </button>
    <Dialog open={open} onClose={(e) => setOpen(false)}>
    {msg}
    </Dialog>
    </div>
    )
    }

export default LikeButton;