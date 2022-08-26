import React , {useState} from 'react'

import ProductServices from '../Services/ProductServices'
import Dialog from '../Components/Dailogue'
import './Enquiry.css'

const GetQuotation= (props) => {

    const loginStatus = localStorage.getItem('loginstatus')
    const [open,setOpen] = useState(false)
    const [msg,setMsg] = useState('')

    const Getquot = () => {
        if(loginStatus==='1') {
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

export default GetQuotation;