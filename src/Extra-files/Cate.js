import React from 'react'
import {Link } from 'react-router-dom'

import './Cate.css'

const Cate = (props) => {


    const setCate = () => {
        localStorage.setItem('category_id', props.id)
    }
    return (
        <span className='span'>
        <button onClick={setCate} className="figure">
        <Link to="/productbycate_list" >
            <p className='circle'>
            <img className= "productimg" src={props.image}/></p> 
        </Link>
   </button>
   <h3>{props.id}</h3>
   <h5 style={{color: 'black'}}><Link to="/productbycate_list">{props.name}</Link></h5>
   </span>

    )
    }
export default Cate;