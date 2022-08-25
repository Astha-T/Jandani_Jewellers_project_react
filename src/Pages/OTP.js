import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

import './Otp.css'
import LoginBox from '../Components/LoginBox'
import Login from './Login'
import SideBar from '../Components/SideBaar';
import SignupLoginbox  from '../Components/SignupLoginbox'
import UserService from '../Services/UserServices'

const Otp = (props) =>
{
  const [loginOpen,setLoginOpen] =useState(false);
  const [Otpopen,setOtpOpen] = useState(true)

       var phonebox = undefined;
       var otpbox = undefined;
   
       const [msg,setMsg] = useState('');
       const [otpIsValid,setOtpIsValid] = useState(false);

       const login = () =>{
        setOtpOpen(false)
        setLoginOpen(true)
       }

       const submitHandler = (event) => {
         event.preventDefault();

         var ob1= {
          mobile: phonebox.value,
          otp: otpbox.value
         }
         console.log(ob1)
            
           UserService.otpVerify(ob1).then(response=>response.json()).then(data=>
              {
                if(data.status==="1") {
                  console.log(data)
                  setOtpIsValid(true)
                  setMsg("Otp is Valid")
                }
                else {
                  setMsg("Please enter correct Otp/Mobile no.")
                }
              }
           )}

       return (<>
       <SignupLoginbox open={Otpopen} onClose={(e) => setOtpOpen(false)}>
          <div className="enterotp">
          <div>
          <h2>Enter Otp</h2>
          <form onSubmit ={submitHandler}> 
          <input type="text" placeholder="Phone No." ref={c=>phonebox=c} required/>
          <input type="text" placeholder=' OTP' name="otp" ref={c=>otpbox=c} required/>
          <button onClick={login}type="send">Submit</button>
          <p>{msg}</p>
          </form>
          </div>
        </div>
        </SignupLoginbox>
        <LoginBox open={loginOpen}><Login/></LoginBox>
       </>
       )

}

export default Otp;