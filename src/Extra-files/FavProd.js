import React, {useState} from 'react'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'

import Dialog from '../Components/Dailogue'
import './FavProd.css'
import RemoveFav from '../Components/RemoveFav'

function mapStateToProps(state){
    return {
        loginstatus : state.user.loginstatus,
        full_name : state.user.full_name,
        user_id : state.user.user_id
    }
}
const FavProd = (props) => {
    const [msg,setMsg] = useState('')
    const [open,setOpen] = useState(false)
   
    const setProductId = () => {
        localStorage.setItem('product_id', props.id)
    }

    return (
        <span className="span">
            <RemoveFav/>
        <button onClick={setProductId} className="figure">
            <Link to="/singleProduct" >
            <img className= "productimg" src={props.image}/> 
            </Link>
       </button>
       <h3>{props.id}</h3>
        <h5><Link to="/singleProduct">{props.name}</Link></h5>
      <Dialog open={open} onClose={(e) => setOpen(false)}>
      {msg}
      </Dialog>
      </span>
    )
}

export default connect(mapStateToProps)(FavProd);
