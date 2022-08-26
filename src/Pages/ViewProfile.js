import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

// import Contact  from '../Components/Contact';
// import Join from '../Components/Join';
import './ViewProfile.css'
import UserServices from '../Services/UserServices'
import SideBar from '../Components/SideBaar'

const ViewProfile = (props) => 
{

   const loginStatus = localStorage.getItem('loginstatus')
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
   {loginStatus==='1' && <Navigate to="/"/>}
    <div>
     <SideBar/>
    <div className="profile">
    <h2>YOUR PROFILE</h2>
    <p>Name: <b>{username}</b></p>
    <p>Email: <b>{useremail}</b></p>
    <p>Mobile: <b>{usermobile}</b></p>
    <h3>Update your Profile? <Link to="/updateProfile" className="link">Update</Link></h3>
    </div>
    </div>
    {/* <Join/>
   <Contact/> */}
    </div>
 )
 }
export default ViewProfile;