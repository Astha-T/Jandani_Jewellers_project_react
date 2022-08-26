import React, {useState} from 'react'
import {Link } from 'react-router-dom'

import Dialog from '../Components/Dailogue'
import './FavProd.css'

const FavProd = (props) => {
    const [msg,setMsg] = useState('')
    const [open,setOpen] = useState(false)
   
    const setProductId = () => {
        localStorage.setItem('product_id', props.id)
    }

    return (
        <div className="col-md-3 col-sm-6 col-6 abc">
<figure>
    <Link onClick={setProductId} to="/singleProduct" >
            {/* <p className= 'circle'> */}
            <img src={props.image}/>
            {/*</p> */}
        </Link>
        </figure>
   <h3>{props.id}</h3>
   <h5 style={{color: 'black'}}><Link to="/singleProduct">{props.name}</Link></h5>
      <Dialog open={open} onClose={(e) => setOpen(false)}>
      {msg}
      </Dialog>
      </div>
    )
}

export default FavProd;
