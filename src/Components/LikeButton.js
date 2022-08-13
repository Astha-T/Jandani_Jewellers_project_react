import React, { useState } from 'react'
import {connect} from 'react-redux'

import ProductServices from '../Services/ProductServices'
import Dialog from '../Components/Dailogue'
import './LikeButton.css'

function mapStateToProps(state){
    return {
        loginstatus : state.user.loginstatus,
        full_name : state.user.full_name,
        user_id : state.user.user_id
    }
}

const LikeButton = (props) => {

    const [like,setLike] = useState(false)
    const [msg,setMsg] = useState('')
    const [open,setOpen] = useState(false)

    const Like= () => {
    
    if(props.loginstatus===true) {

        if(like===true) {
    
        ProductServices.Add_fav().then((response)=>response.json()).then(data=> {
        console.log(data)
        if(data.status==="1")
        setOpen(true)
        setMsg(data.message)
        setLike(false)
    })}

     else if(like===false)
     {
        ProductServices.Remove_fav().then((response)=>response.json()).then(data=> {
            console.log(data)
            if(data.status==="1")
            setOpen(true)
            setMsg(data.message)
        })}
        setLike(true)
     }

    else {
        setOpen(true)
         setMsg("Please Login to your Account")
    }
}

    return (
        <span className="like" >
      <button onClick={Like}>
            <img src='./images/like2.png'/>
    </button>
    <Dialog open={open} onClose={(e) => setOpen(false)}>
    {msg}
    </Dialog>
    </span>
    )
}

export default connect(mapStateToProps)(LikeButton);