import { useState} from "react";
import React from "react";
import { Navigate } from "react-router-dom";
import striptags from 'striptags'

import Contact  from '../Components/Contact';
import Join from '../Components/Join';
import SideBar from '../Components/SideBaar'
import NotificationList from "../Extra-files/NotificationList";
import OtherServices from '../Services/OtherServices';
import './UserNotification.css'
 
const UserNotification = (props) => {
    
    const loginStatus = localStorage.getItem('loginstatus')
    const [notification,setNotification] = useState([]);

       OtherServices.UNotification().then((response)=>response.json()).then(data=> {
            
                console.log(data)
         const imageUrl = "https://dev.weblaunchpad.in/jandani_jewellers/public/product";
         const updatedNotifications= data.result.map((note)=> {
            
                return{
                    image : imageUrl+'/'+note.image,
                    title : note.title,
                    description: striptags(note.description),
                }
            
          })
          setNotification(updatedNotifications)
        }
        )

    return(
        <div>
        {loginStatus==='1' ?
        <div className="product_section">
                <SideBar/>
        <h4>YOUR NOTIFICATION</h4>
        <div className="row">
        <div className="col-md-12">
        <NotificationList notification={notification}/> 
        </div>
        </div>
        </div>
        : <Navigate to="/"/>}
        <Join/>
        <Contact/>
        </div>

    )
}
export default UserNotification;