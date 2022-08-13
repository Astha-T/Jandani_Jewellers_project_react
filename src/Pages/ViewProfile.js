import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './ViewProfile.css'
import UserServices from '../Services/UserServices'
import SideBar from '../Components/SideBaar'

const ViewProfile = (props) => 
{
       const [username,setUserName] = useState('');
       const [useremail,setUserEmail] = useState('');
       const [usermobile,setUserMobile] = useState('');
   
      UserServices.Get_UserProfile().then(response=>response.json()).then(data=>{
                   
                    const updatedName = data.result.full_name
                    const updatedEmail = data.result.email
                    const updatedMobile = data.result.mobile
                    
                    setUserName(updatedName)
                    setUserEmail(updatedEmail)
                    setUserMobile(updatedMobile)
            }
      )
         
           
 return (
      
    <div>
     <SideBar/>
    <div className="profile">
    <h2>Your Profile</h2>
    <p>Name: <b>{username}</b></p>
    <p>Email: <b>{useremail}</b></p>
    <p>Mobile: <b>{usermobile}</b></p>
    <h3>Update your Profile? <Link to="/jandani_jewellers_react/updateProfile" className="link">Update</Link></h3>
    </div>
    </div>
 )
 }
export default ViewProfile;