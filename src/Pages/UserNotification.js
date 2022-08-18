import { useState} from "react";
import React from "react";

import SideBar from '../Components/SideBaar'
import NotificationList from "../Extra-files/NotificationList";
import OtherServices from '../Services/OtherServices';
import './UserNotification.css'

const UserNotification = () => {
    
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
        <div>
             <SideBar/>
        <div className="unotification">
            <h2>Your Notifications</h2>

            <NotificationList notification={notification}/> 
        </div>
        </div>
    )
}
export default UserNotification;