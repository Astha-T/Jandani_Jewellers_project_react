import React, { useState } from 'react'
import { Link, Navigate} from 'react-router-dom'

import Store from '../Redux/Store'
import {ACTION_USER_LOGIN_LOGOUT} from '../Redux/Actions/UserAction'
import './Login.css'
import UserService from '../Services/UserServices'

const Login = (props) => 
{

       var loginphonebox = undefined;
       var loginpassbox = undefined;

       const [loginMsg, setLoginMsg] = useState('');
       const [islogin,setIsLogin] = useState(false);

      //  const signup = () => {
       
      //   setLoginOpen(false)
      //   setSignupOpen(true)
      //  }

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
                    localStorage.setItem('loginstatus',data.status);
                    localStorage.setItem('full_name', data.data.full_name);
                    localStorage.setItem('email',data.data.email);
                    
                    Store.dispatch({...ACTION_USER_LOGIN_LOGOUT,payload: {
                     loginstatus : data.status,
                     full_name : data.data.full_name,
                     user_id : data.data.user_id,
                     mobile : data.data.mobile,
                     email : data.data.email
                  }})

                    setIsLogin(true)
                    setLoginMsg("Login Successfully...")
               }
                  else {
                     setLoginMsg('Please enter a valid phone number/password')
                  }
               
            })
       }     

 return ( islogin ?
   <Navigate to="/"/> :
 <div className="login">
 <h2>LOGIN</h2>
 <p className='msg'>{loginMsg}</p>
 <form className='loginform' onSubmit ={submitHandler}>
  <input className="phone" type="text" placeholder=' Phone number' name="email_phone" ref={c=>loginphonebox=c} required/>
  <input className='pass' type="password" placeholder=" Password " name="password" ref={c=>loginpassbox=c} required />
 <button className="defaultButtonl" type="send">Log-in</button>
 </form>
  {/* <h3>Not having any Account?<button  className="link" > SignUp</button></h3> */}
 </div>
 
)
}
export default Login;