import React, { useState } from 'react'
import {connect} from 'react-redux'

import ProductServices from '../Services/ProductServices'
import Dialog from '../Components/Dailogue'
import './LikeButton.css'

function mapStateToProps(state){
    return {
        loginstatus : state.user.loginstatus,
        full_name : state.user.full_name,
        user_id : state.user.user_id,
}
}

const LikeButton = (props) => {

    const [like,setLike] = useState(false)
    const [msg,setMsg] = useState('')
    const [open,setOpen] = useState(false)
    const [span,setSpan] = useState(false)

    const Like= () => {
    
    if(props.loginstatus===true) {
        
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

export default connect(mapStateToProps)(LikeButton);