import React, { useState } from 'react'
import { Link, Navigate} from 'react-router-dom'

import Store from '../Redux/Store'
import {ACTION_USER_LOGIN_LOGOUT} from '../Redux/Actions/UserAction'
import './Switch.css'
import SignupLoginbox  from '../Components/SignupLoginbox'
import UserService from '../Services/UserServices'


const SignUpLogin = (props) => 
{
    const [open,setOpen] = useState(true)
    const [signupOpen,setSignupOpen] = useState(false)

       var loginphonebox = undefined;
       var loginpassbox = undefined;

       const [loginMsg, setLoginMsg] = useState('');
       const [islogin,setIsLogin] = useState(false);

       const SignUpOption = () => {
        setOpen(false)
        setSignupOpen(true)
       }

       const submitHandler = (event) =>  { 
         event.preventDefault();
         setLoginMsg("Login in Process...")
         
          var obj={
            mobile : loginphonebox.value,
            password : loginpassbox.value
          }
          console.log(obj)

          UserService.loginUser(obj).then(response=>response.json()).then(data=>{
               if(data.status === '1') {
                    console.log(data)
                    localStorage.setItem('user_id', data.user_id);
                    localStorage.setItem('mobile', data.mobile);
                    Store.dispatch({...ACTION_USER_LOGIN_LOGOUT,payload: {
                     loginstatus : true,
                     full_name : data.data.full_name,
                     user_id : data.data.user_id
                  }})
                    setIsLogin(true)
                    setLoginMsg("Login Successfully...")
               }
                  else {
                     setLoginMsg('Login Failed...')
                  }
               
            })
}

 return ( islogin?
   <Navigate to="/"/>:  <>
   <SignupLoginbox open={open}>
   <div className="switch">
 <h2>LOGIN</h2>
 <form className="switchform" onSubmit ={submitHandler}>
  <input className="phone" type="text" placeholder=' Phone number' name="email_phone" ref={c=>loginphonebox=c} required/>
  <input className="pass" type="password" placeholder=" Password " name="password" ref={c=>loginpassbox=c} required />
 <button className="defaultButton" type="send">Log-in</button>
 <h3>Not having any Account?<Link className="link" to="/signup"> SignUp</Link></h3>
 <p>{loginMsg}</p>
 </form>
 </div>
 </SignupLoginbox>
       </>

)
}
export default SignUpLogin;