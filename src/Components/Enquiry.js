import React, { useState } from 'react'

import ProductServices from '../Services/ProductServices'
import Dialog from '../Components/Dailogue'
import './Enquiry.css'

const Enquiry = (props) => {
    
    const loginStatus = localStorage.getItem('loginstatus')
    const [msg,setMsg] = useState('')
    const [open,setOpen] = useState(false)

    const SaveEnquiry = () => {
        if(loginStatus==='1') {
           
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
    <div className="enquiry">
        <button type="btn" onClick={SaveEnquiry}>ENQUIRY NOW</button>
        <Dialog open={open} onClose={(e) => setOpen(false)}>
        {msg}
        </Dialog>
        </div>
)
}

export default Enquiry;