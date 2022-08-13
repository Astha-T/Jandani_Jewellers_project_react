import React from 'react'

import ProductServices from '../Services/ProductServices'

const RemoveFavourite = () => {


    const RemoveFav= () => {

    ProductServices.Remove_fav().then((response)=>response.json()).then(data=> {
        console.log(data)
        if(data.status==="1")
        alert(data.message)
    })}

    return (
      <button onClick={RemoveFav}>
            <img src='./images/like1 (1).png'/>
    </button>
    )
}

export default RemoveFavourite;