import React, { useState } from 'react'
import { Link, Navigate} from 'react-router-dom'

import Store from '../Redux/Store'
import {ACTION_USER_LOGIN_LOGOUT} from '../Redux/Actions/UserAction'
import './Login.css'
import LoginBox from '../Components/LoginBox'
import SignUpBox from '../Components/SignUpBox'
import SignUp from './SignUp'
import UserService from '../Services/UserServices'

const Login = (props) => 
{

       var loginphonebox = undefined;
       var loginpassbox = undefined;

       const [loginMsg, setLoginMsg] = useState('');
       const [islogin,setIsLogin] = useState(false);
       const [loginOpen,setLoginOpen] =useState(true);
       const [signupopen,setSignupOpen] = useState(false)

       const signup = () => {
       
        setLoginOpen(false)
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
                    localStorage.setItem('mobile',data.data.mobile);
                    localStorage.setItem('loginstatus',true);
                    localStorage.setItem('full_name', data.data.full_name);
                    
                    Store.dispatch({...ACTION_USER_LOGIN_LOGOUT,payload: {
                     loginstatus : true,
                     full_name : data.data.full_name,
                     user_id : data.data.user_id,
                     mobile : data.data.mobile
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
   <Navigate to="/"/> : <>
   <LoginBox open={loginOpen} onClose={(e) => setLoginOpen(false)}>
 {<div className="login">
 <h2>LOGIN</h2>
 <form className='loginform' onSubmit ={submitHandler}>
  <input className="phone" type="text" placeholder=' Phone number' name="email_phone" ref={c=>loginphonebox=c} required/>
  <input className='pass' type="password" placeholder=" Password " name="password" ref={c=>loginpassbox=c} required />
 <button className="defaultButton" type="send">Log-in</button>
 <h3>Not having any Account?<button onClick={signup} className="link" > SignUp</button></h3>
 <p>{loginMsg}</p>
 </form>
 </div>}
 </LoginBox> 
 <SignUpBox open={signupopen} onClose={(e) => setSignupOpen(false)}><SignUp/></SignUpBox></>
)
}
export default Login;