import React from 'react'

import ProductServices from '../Services/ProductServices'
import './RemoveFav.css'

const RemoveFavourite = () => {


    const RemoveFav= () => {

    ProductServices.Remove_fav().then((response)=>response.json()).then(data=> {
        console.log(data)
        if(data.status==="1")
        alert(data.message)
    })}

    return (
      <button className='remove' onClick={RemoveFav}>Remove</button>
    )
}

export default RemoveFavourite;