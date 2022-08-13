import React, { useState } from 'react'
import {connect} from "react-redux"

import ProductServices from '../Services/ProductServices'
import Dialog from '../Components/Dailogue'
import './Enquiry.css'

function mapStateToProps(state){
    return {
        loginstatus : state.user.loginstatus,
        full_name : state.user.full_name,
        user_id : state.user.user_id
    }
}

const Enquiry = (props) => {

    const [msg,setMsg] = useState('')
    const [open,setOpen] = useState(false)

    const SaveEnquiry = () => {
        if(props.loginstatus===true) {
           
    ProductServices.Save_Product_Enquiry().then((response)=>response.json()).then(data=> {
        console.log(data)
        if(data.status==='true')
        setMsg(data.message)
        setOpen(true)
     })
    }

    else {
        setOpen(true)
        setMsg("Please Login to your account!!!")
    }
    }

return (
    <span className="enquiry">
        <button type="btn" onClick={SaveEnquiry}>ENQUIRY NOW</button>
        <Dialog open={open} onClose={(e) => setOpen(false)}>
        {msg}
        </Dialog>
        </span>
)
}

export default connect(mapStateToProps)(Enquiry);