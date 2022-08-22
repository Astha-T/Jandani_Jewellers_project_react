import React from 'react'
import {Link } from 'react-router-dom'

import './Cate.css'

const Cate = (props) => {


    const setCate = () => {
        localStorage.setItem('category_id', props.id)
    }
    return (
        <div className="col-md-2 col-sm-6 col-6">
            <figure>
    <Link onClick={setCate} to="/productbycate_list">
            {/* <p className= 'circle'> */}
            <img src={props.image}/>
            {/*</p> */}
        </Link>
        </figure>
   <h3>{props.id}</h3>
   <h5 style={{color: 'black'}}><Link to="/productbycate_list">{props.name}</Link></h5>
   </div>
    )
    }
export default Cate;