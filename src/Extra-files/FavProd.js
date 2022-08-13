import React, {useState} from 'react'
import {Link } from 'react-router-dom'

import Dialog from '../Components/Dailogue'
import ProductServices from '../Services/ProductServices'

import './FavProd.css'

const FavProd = (props) => {

    const [msg,setMsg] = useState('')
    const [open,setOpen] = useState(false)
   
    const setProductId = () => {
        localStorage.setItem('product_id', props.id)
    }

    const removeFav = () => {

        ProductServices.Remove_fav().then((response)=>response.json()).then(data=> {
            console.log(data)
            setOpen(true)
            setMsg(data.message)
        })} 

    return (
       <span >
        <button className="figure" onClick={setProductId} > 
        <button className="remove" onClick={removeFav}>Remove Favourite</button>
            <Link to="/singleProduct" ><img src={props.image}/> 
            </Link>
         <h3>{props.id}</h3>
        <h5><Link to="/singleProduct">{props.name}</Link></h5>
       </button>
       <Dialog open={open} onClose={(e) => setOpen(false)}>
    {msg}
    </Dialog>
       </span>
    )
}

export default FavProd;