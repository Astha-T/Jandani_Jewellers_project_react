import React, { useState } from 'react'
import {connect} from 'react-redux'

import ProductServices from '../Services/ProductServices'
import Dialog from '../Components/Dailogue'
import './RemoveFav.css'

function mapStateToProps(state){
    return {
        loginstatus : state.user.loginstatus,
        full_name : state.user.full_name,
        user_id : state.user.user_id,
}
}

const RemoveFav = (props) => {

    const [msg,setMsg] = useState('')
    const [open,setOpen] = useState(false)

    const Remove = () =>
   {
    if(props.loginstatus===true) {
        localStorage.getItem('product_id')
        localStorage.getItem('user_id')
        ProductServices.Remove_fav().then((response)=>response.json()).then(data=> {
            console.log(data)
            setOpen(true)
            setMsg(data.message)
        })
    }

    else {
        setOpen(true)
         setMsg("Please Login to your Account")
    }
}

    return (
        <span className="like">
      <button className='remove' onClick={Remove}> Remove Favourite </button>
    <Dialog open={open} onClose={(e) => setOpen(false)}>
    {msg}
    </Dialog>
    </span>
    )
    }

export default connect(mapStateToProps)(RemoveFav);