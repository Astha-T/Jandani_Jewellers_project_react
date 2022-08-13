import React from 'react'
import {connect} from 'react-redux'
import ProductServices from '../Services/ProductServices'

function mapStateToProps(state){
    return {
        loginstatus : state.user.loginstatus,
        full_name : state.user.full_name,
        user_id : state.user.user_id
    }
}

const AddFavourite = (props) => {


    const AddFav= () => {

    if(props.loginstatus===true) {
    ProductServices.Add_fav().then((response)=>response.json()).then(data=> {
        console.log(data)
        if(data.status==="1")
        alert(data.message)
    })}

    else {
         alert("Please Login!!!")
    }
}

    return (
      <button onClick={AddFav}>
            <img src='./images/like2.png'/>
    </button>
    )
}

export default connect(mapStateToProps)(AddFavourite);