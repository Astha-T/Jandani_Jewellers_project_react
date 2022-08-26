import React, { useState } from 'react'

import ProductServices from '../Services/ProductServices'
import Dialog from '../Components/Dailogue'
import './LikeButton.css'

const DislikeButton = (props) => {

  const loginStatus = localStorage.getItem('loginstatus')
    const [msg,setMsg] = useState('')
    const [open,setOpen] = useState(false)
    const [dislike,setdislike] = useState(true)

    const Dislike= () => {
    
        if(loginStatus==='1') {
        
          if(dislike===true)
          {
        ProductServices.Remove_fav().then((response)=>response.json()).then(data=> {
            console.log(data)
            if(data.status===1)
            {
            setdislike(false)
            }
            setOpen(true)
            setMsg(data.message)
        })
      } 
      else {
        ProductServices.Add_fav().then((response)=>response.json()).then(data=> {
          if(data.status==='1')
          {
            setdislike(true)
          }
        console.log(data)
        setOpen(true)
        setMsg(data.message)
       
    })
      }}
    
        else {
        setOpen(true)
         setMsg("Please Login to your Account")
    }
    }
  

    return (
        <div className="like">
      <button onClick={Dislike}>
    {dislike===true &&  <span className='fa fa-heart' style={{color : "red" , fontSize: '17px'}}/>}
    {dislike===false &&  <span className='fa fa-heart' style={{color : "white", fontSize: '17px'}}/> }
      </button>
    <Dialog open={open} onClose={(e) => setOpen(false)}>
    {msg}
    </Dialog>
    </div>
    )
    }

export default DislikeButton;