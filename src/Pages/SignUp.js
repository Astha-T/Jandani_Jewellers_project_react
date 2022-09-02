import React, { useState } from 'react'
import { Link, Navigate} from 'react-router-dom';

import UserService from '../Services/UserServices'
import LoginBox from '../Components/LoginBox'
import Login from './Login'
// import SideBar from '../Components/SideBaar';
import SignUpBox from '../Components/SignUpBox';
import SignupLoginbox from '../Components/SignUpBox'
import Otp from './OTP'
import './SignUp.css'

const Signup = (props) =>
{
  
  // const [loginOpen,setLoginOpen] =useState(false);
  //      const [signupopen,setSignupOpen] = useState(true)
  //      const [Otpopen,setOtpOpen] = useState(false)

    var namebox = undefined;
    var emailbox = undefined;
    var phonebox = undefined;
    var passbox = undefined;
    var confirmPass = undefined;

    const [regMsg,setRegMsg] = useState('');
    const [isReg,setIsReg] = useState(false);

  //  const login = () =>{
  //   setSignupOpen(false)
  //   setLoginOpen(true)
  //  }
    
    const submitHandler = (event) => {
      event.preventDefault();
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
  }    

  // const otp = () => {
  //     setOtpOpen(true)
  //     setLoginOpen(false)
  //     setSignupOpen(false)
    
  // }
    
    return ( isReg ?
      <Navigate to="/"/> :
        <div className='sign_up'>
            <h2>SIGN UP</h2>
            <form onSubmit={submitHandler}>
            <input type="text" placeholder=' Name ' name='name' ref={c=>namebox=c} required/>
            <input type="text" placeholder=' Email ' name='email' ref={c=>emailbox=c} required/>
            <input type="text" placeholder=' Phone Numbers ' name='phone' ref={c=>phonebox=c} required />
            <input type="password" placeholder=' Password' name='password' ref={c=>passbox=c} required/>
            <input type="password" placeholder='Confirm Password' name='confirmpassword' ref={c=>confirmPass=c} required />
            <button className="defaultButtons" type='send'>Sign Up</button>
            <p className='msgs'>{regMsg}</p>
            </form>
            {/* <h3>Already a User? <button onClick={login} className="link" >Login</button></h3> */}
       </div>
    
    
      )
}

export default Signup;