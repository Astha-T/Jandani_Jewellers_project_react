import React from 'react'
import {Link } from 'react-router-dom'

import './Cate.css'

const Cate = (props) => {


    const setCate = () => {
        localStorage.setItem('category_id', props.id)
    }
    return (
                        <button onClick={setCate} className="figure" >
                            <Link to="/jandani_jewellers_react/productbycate_list" ><img src={props.image}/></Link>
                             <h3>{props.id}</h3>
                            <h5><Link to="/jandani_jewellers_react/productbycate_list">{props.name}</Link></h5>
                    </button>
                   


    )
    }
export default Cate;