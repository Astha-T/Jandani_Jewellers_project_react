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
  const [Otpopen,setOtpopen] = useState(false)
  

       var otpphonebox = undefined;
       var otpbox = undefined;
   
       const [otpmsg,setotpMsg] = useState('');
       const [otpIsValid,setOtpIsValid] = useState(false);

       const login = () =>{
        setOtpopen(false)
        setLoginOpen(true)
       }

       const submitHandler3 = (event) => {
         event.preventDefault();

         var ob1= {
          mobile: otpphonebox.value,
          otp: otpbox.value
         }
         console.log(ob1)
            
           UserService.otpVerify(ob1).then(response=>response.json()).then(data=>
              {
                if(data.status==="1") {
                  console.log(data)
                  setOtpIsValid(true)
                  setotpMsg("Otp is Valid")
                }
                else {
                  setotpMsg("Please enter correct Otp/Mobile no.")
                }
              }
           )}

       return (<>
       <SignupLoginbox open={Otpopen} onClose={(e) => setOtpopen(false)}>
          <div className="enterotp">
          <div>
          <h2>Enter Otp</h2>
          <form onSubmit ={submitHandler3}> 
          <input type="text" placeholder="Phone No." ref={c=>otpphonebox=c} required/>
          <input type="text" placeholder=' OTP' name="otp" ref={c=>otpbox=c} required/>
          <button className="defaultButtono" onClick={login}type="send">Submit</button>
          <p className='msgo'>{otpmsg}</p>
          </form>
          </div>
        </div>
        </SignupLoginbox>
        <LoginBox open={loginOpen}><Login/></LoginBox>
       </>
       )

}

export default Otp;