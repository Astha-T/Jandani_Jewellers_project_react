import React, { useState } from 'react'

import ProductServices from '../Services/ProductServices'
import Dialog from '../Components/Dailogue'
import './LikeButton.css'

const LikeButton = (props) => {

  const loginStatus = localStorage.getItem('loginstatus')
    const [like,setLike] = useState(true)
    const [msg,setMsg] = useState('')
    const [open,setOpen] = useState(false)
    const [span,setSpan] = useState(false)

    const Like= () => {
    
    if(loginStatus==='1') {
        
       if(like===true)
      {

        ProductServices.Add_fav().then((response)=>response.json()).then(data=> {
        console.log(data)
        setOpen(true)
        setMsg(data.message)
        if(data.status==="1")
        {
        setSpan(true) 
        }
    })
    setLike(false)
}

     else if(like===false)
     {
        
        ProductServices.Remove_fav().then((response)=>response.json()).then(data=> {
            console.log(data)
            setOpen(true)
            setMsg(data.message)
            if(data.status==="1")
            {
            setSpan(false)
            }
        })
      setLike(true)
    }

    }

    else {
        setOpen(true)
         setMsg("Please Login to your Account")
    }
    }

    return (
        <div className="like">
      <button onClick={Like}>
    {span===false ? <span className='fa fa-heart' style={{color : "white", fontSize: '17px'}}/>
     :  <span className='fa fa-heart' style={{color : "red" , fontSize: '17px'}}/>                                                                       }
    </button>
    <Dialog open={open} onClose={(e) => setOpen(false)}>
    {msg}
    </Dialog>
    </div>
    )
    }

export default LikeButton;