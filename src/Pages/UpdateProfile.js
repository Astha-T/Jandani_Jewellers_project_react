import React, { useState } from 'react'
import { connect } from 'react-redux'

import UserService from '../Services/UserServices'
import {Navigate} from 'react-router-dom'
import SideBar from '../Components/SideBaar';
import './UpdateProfile.css';

function mapStateToProps(state){
  return {
      loginstatus : state.user.loginstatus,
      full_name : state.user.full_name,
      user_id : state.user.user_id
  }
}

const UpdateProfile = (props) =>
{
    var namebox = undefined;
    var emailbox = undefined;
    var phonebox = undefined;
    var passbox = undefined;
    var confirmPass = undefined;

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
  
    
    return (  isReg===true && props.loginstatus!==true ? <Navigate to="/"/>: <>
    
    <SideBar/>
   
        <div className='update'>
            <h2>Update Profile</h2>
            <form onSubmit={submitHandler}>
            <input type="text" placeholder=' Name ' name='name' ref={c=>namebox=c} required/>
            <input type="text" placeholder=' Email ' name='email' ref={c=>emailbox=c} required/>
            <input type="text" placeholder=' Phone Numbers ' name='phone' ref={c=>phonebox=c} required />
            <input type="password" placeholder=' Password' name='password' ref={c=>passbox=c} required/>
            <input type="password" placeholder='Confirm Password' name='confirmpassword' ref={c=>confirmPass=c} required />
            <button  type='send'>Submit</button>
            <p>{regMsg}</p>
            </form>
           </div>
        </>
    )
}

export default connect(mapStateToProps)(UpdateProfile);