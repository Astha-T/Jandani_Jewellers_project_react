import React, { useState } from 'react'

import UserService from '../Services/UserServices'
import {Navigate,useNavigate} from 'react-router-dom'
import SideBar from '../Components/SideBaar';
import './UpdateProfile.css';
// import Join from '../Components/Join';
import Contact from '../Components/Contact'

const UpdateProfile = (props) =>
{
    var namebox = undefined;
    var emailbox = undefined;
    var phonebox = undefined;
    var passbox = undefined;
    var confirmPass = undefined;

    const navigate = useNavigate();
    
    const loginStatus = localStorage.getItem('loginstatus')
    const [regMsg,setRegMsg] = useState('');
    const [isReg,setIsReg] = useState(false);
   
    const submitHandler = (event) => {

           var ob = {
                name : namebox.value,
                email : emailbox.value,
                mobile : phonebox.value,
                password : passbox.value,
                confirmPassword : confirmPass.value
            }
            console.log(ob)

            UserService.Update_UserProfile(ob).then(response=>response.json()).then(data=>{
              if(data.status)
              {
                console.log(data)
                setIsReg(true)
                setRegMsg('Profile Updated Successfully...')
                console.log(data)
                alert("Profile Updated Successfully")
                
              }
              else {
                setRegMsg("Profile Update Failed...")
              }
            })
           
       event.preventDefault();
  }    
  
    
    return ( 
      <div>
        {loginStatus==='0' ? <Navigate to="/" />
       : <div>
         <SideBar/>
         <div className='d-flex justify-content-center align-items-center btndiv'>
      <button onClick={() => navigate(-1)} className="prevBtn" ><span className="fa fa-arrow-left"/> Prev</button>
    <button onClick={() => navigate('/')} className="disabled" ><span className="fa fa-arrow-right"/> Next</button>
    </div>
        <div className="up">
        <h2>Update Profile</h2>
            <form className="upForm" onSubmit={submitHandler}>
            
            <input type="text" placeholder=' Name ' name='name' ref={c=>namebox=c} required/>
            <input type="text" placeholder=' Email ' name='email' ref={c=>emailbox=c} required/>
            <input type="text" placeholder=' Phone Numbers ' name='phone' ref={c=>phonebox=c} required />
            <input type="password" placeholder=' Password' name='password' ref={c=>passbox=c} required/>
            <input type="password" placeholder='Confirm Password' name='confirmpassword' ref={c=>confirmPass=c} required />
            <button className="defaultButton" type='send'>Submit</button>
            <p>{regMsg}</p>
            </form>
           
           </div>
           {/*<Join/>*/}
            <Contact/>
           </div>}
    </div>
  
    )
}

export default UpdateProfile;