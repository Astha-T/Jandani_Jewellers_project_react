import React, { useState } from 'react'
import { Link, Navigate} from 'react-router-dom';

import UserService from '../Services/UserServices'
import SideBar from '../Components/SideBaar';
import SignUpBox from '../Components/SignUpBox';
import './SignUp.css'

const Signup = (props) =>
{
  
  const [signupopen,setSignupOpen] = useState(true)
  const [open,setOpen] = useState(false)

    var namebox = undefined;
    var emailbox = undefined;
    var phonebox = undefined;
    var passbox = undefined;
    var confirmPass = undefined;

    const [regMsg,setRegMsg] = useState('');
    const [isReg,setIsReg] = useState(false);

   const loginOption = () =>{
    
    setSignupOpen(false)
    setOpen(true)
   }
  
    const submitHandler = (event) => {
            
         setRegMsg('Registration in Process...')

           var ob = {
                name : namebox.value,
                email : emailbox.value,
                mobile : phonebox.value,
                password : passbox.value,
                confirmPassword : confirmPass.value
            }
            console.log(ob)

            UserService.saveData(ob).then(response=>response.json()).then(data=>{
              if(data.status)
              {
                console.log(data)
                setIsReg(true)
                setRegMsg('Registration Done...')
                console.log(data)
                
              }
              else {
                setRegMsg("Registration Failed...")
              }
            })
           
       event.preventDefault();
  }    
    
    return ( isReg ?<Navigate to="/jandani_jewellers_react/otp"/>: <>
     <SideBar/> 
      <SignUpBox open={signupopen}>
        <div className='sign_up'>
            <p>Create your Account...</p>
            <h2>Sign Up</h2>
            <form onSubmit={submitHandler}>
            <input type="text" placeholder=' Name ' name='name' ref={c=>namebox=c} required/>
            <input type="text" placeholder=' Email ' name='email' ref={c=>emailbox=c} required/>
            <input type="text" placeholder=' Phone Numbers ' name='phone' ref={c=>phonebox=c} required />
            <input type="password" placeholder=' Password' name='password' ref={c=>passbox=c} required/>
            <input type="password" placeholder='Confirm Password' name='confirmpassword' ref={c=>confirmPass=c} required />
            <button className="defaultButton" type='send'>Sign Up</button>
            <p>{regMsg}</p>
            </form>
            <h3>Already a User? <Link className="link" to="/jandani_jewellers_react/switch">Login</Link></h3>
       </div>
       </SignUpBox>
      </>
      )
}

export default Signup;