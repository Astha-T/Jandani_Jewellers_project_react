import { useState} from "react";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import striptags from 'striptags'

import Contact  from '../Components/Contact';
// import Join from '../Components/Join';
import SideBar from '../Components/SideBaar'
import NotificationList from "../Extra-files/NotificationList";
import OtherServices from '../Services/OtherServices';
import './UserNotification.css'
 
const UserNotification = (props) => {

    const navigate = useNavigate();
    
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
        <div className="note_section">
                <SideBar/>
                <div className='d-flex justify-content-center align-items-center btndiv'>
      <button onClick={() => navigate(-1)} className="prevBtn" ><span className="fa fa-arrow-left"/> Prev</button>
    <button onClick={() => navigate(1)} className="disabled" ><span className="fa fa-arrow-right"/> Next</button>
    </div>
        <h4 className="noteh4">YOUR NOTIFICATION</h4>
        <div className="row">
        <div className="col-md-12">
        <NotificationList notification={notification}/> 
        </div>
        </div>
        </div>
        : <Navigate to="/"/>}
        {/*<Join/>*/}
        <Contact/>
        </div>

    )
}
export default UserNotification;