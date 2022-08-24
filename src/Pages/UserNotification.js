import { useState} from "react";
import React from "react";
import { connect } from 'react-redux'
import { Navigate } from "react-router-dom";

import SideBar from '../Components/SideBaar'
import NotificationList from "../Extra-files/NotificationList";
import OtherServices from '../Services/OtherServices';
import './UserNotification.css'

function mapStateToProps(state){
    return {
        loginstatus : state.user.loginstatus,
        full_name : state.user.full_name,
        user_id : state.user.user_id
    }
 }
 
const UserNotification = (props) => {
    
    const [notification,setNotification] = useState([]);

       OtherServices.UNotification().then((response)=>response.json()).then(data=> {
            
                console.log(data)
         const imageUrl = "https://dev.weblaunchpad.in/jandani_jewellers/public/product";
         const updatedNotifications= data.result.map((note)=> {
            
                return{
                    image : imageUrl+'/'+note.image,
                    title : note.title,
                    description: note.description
                }
            
          })
          setNotification(updatedNotifications)
        }
        )

    return(
        (props.loginstatus===true ?
        <div className="product_section">
                <SideBar/>
        <h4>YOUR NOTIFICATION</h4>
        <div className="row">
        <div className="col-md-12">
        <NotificationList notification={notification}/> 
        </div>
        </div>
        </div>
        : <Navigate to="/"/>)

    )
}
export default connect(mapStateToProps)(UserNotification);