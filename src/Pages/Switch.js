import React, { useState } from 'react'
import { Link, Navigate} from 'react-router-dom'

import Store from '../Redux/Store'
import {ACTION_USER_LOGIN_LOGOUT} from '../Redux/Actions/UserAction'
import './Login.css'
import SideBar from '../Components/SideBaar';
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
   <Navigate to="/jandani_jewellers_react"/>:  <><SideBar/>
   <SignupLoginbox open={open}>
 <div className="login">
 <h2>Login</h2>
 <form onSubmit ={submitHandler}>
  <input type="text" placeholder=' Phone number' name="email_phone" ref={c=>loginphonebox=c} required/>
  <input type="password" placeholder=" Password " name="password" ref={c=>loginpassbox=c} required />
 <button type="send">Log-in</button>
 <h3>Not having any Account? <Link className="link" to="/jandani_jewellers_react/signup">SignUp</Link></h3>
 <p>{loginMsg}</p>
 </form>
 </div>
 </SignupLoginbox>
       </>

)
}
export default SignUpLogin;