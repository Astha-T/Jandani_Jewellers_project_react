import React, { useState } from 'react'

import ProductServices from '../Services/ProductServices'
import Dialog from '../Components/Dailogue'
import './Enquiry.css'

const BookJewellery = (props) => {

    const loginStatus = localStorage.getItem('loginstatus')
    const[msg,setMsg] = useState('')
    const[open,setOpen] = useState(false)

    const BookNow = () => {
        if(loginStatus==='1') {
        ProductServices.Book().then((response)=>response.json()).then(data=> {
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
    <button type="btn" onClick={BookNow}>BOOK JEWELLERY</button>
    <Dialog open={open} onClose={(e) => setOpen(false)}>
    {msg}
    </Dialog>
    </span>
)
}

export default BookJewellery;