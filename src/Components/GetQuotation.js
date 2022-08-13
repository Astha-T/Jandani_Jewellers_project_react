import React , {useState} from 'react'
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

const GetQuotation= (props) => {

    const [open,setOpen] = useState(false)
    const [msg,setMsg] = useState('')

    const Getquot = () => {
        if(props.loginstatus===true) {
        ProductServices.GetQ().then((response)=>response.json()).then(data=> {
        console.log(data)
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
        <button type="btn" onClick={Getquot}>GET QUOTATION</button>
        <Dialog open={open} onClose={(e) => setOpen(false)}>
        {msg}
        </Dialog>
        </span>
)
}

export default connect(mapStateToProps)(GetQuotation);