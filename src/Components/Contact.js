
import React , {useState} from 'react'
import {Link} from 'react-router-dom'

import OtherServices from '../Services/OtherServices'
import Dialog from '../Components/Dailogue'
import './Contact.css'
import LoginBox from './LoginBox'
import UserService from '../Services/UserServices'
import SignUpBox from './SignUpBox'
import SignupLoginbox from './SignupLoginbox'

const Contact = (props) =>
{
    var emailbox= undefined;
    const [msg,setMsg] = useState('');
    const [open,setOpen] = useState(false)
    const [loginOpen,setLoginOpen] = useState(false)
    const [signupOpen,setSignUpOpen] = useState(false)
    const [Otpopen,setOtpopen] = useState(false)
    
    const loginStatus = localStorage.getItem('loginstatus')

    var loginphonebox = undefined;
    var loginpassbox = undefined;
    var namebox = undefined;
      var emailbox = undefined;
      var phonebox = undefined;
      var passbox = undefined;
      var confirmPass = undefined;
      var otpphonebox = undefined;
     var otpbox = undefined;
  
      const [loginMsg, setLoginMsg] = useState('');
      const [islogin,setIsLogin] = useState(loginStatus);
      const [regMsg,setRegMsg] = useState('');
      const [isReg,setIsReg] = useState(false);
      const [otpmsg,setotpMsg] = useState('');
      const [otpIsValid,setOtpIsValid] = useState(false);
  
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
                    localStorage.setItem('loginstatus','1');
                    localStorage.setItem('full_name', data.data.full_name);
                    localStorage.setItem('email',data.data.email);
  
                    setIsLogin('1')
                    setLoginMsg("Login Successfully...")
                    window.location.reload(true)
                    setLoginOpen(false)
               }
                  else {
                    setIsLogin('0')
                     setLoginMsg('Login Failed...')
                  }
            })
       }     
  
       const submitHandler2 = (event) => {
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
                if(data.status==='1' || data.message === 'You are already exist')
                {
                  console.log(data)
                  setIsReg(true)
                  setRegMsg('Registration Done...')
                  setSignUpOpen(false)
                  setOtpopen(true)
                  
                }
                else if(data.status==='0' && data.message !== 'You are already exist'){
                  setRegMsg("Registration Failed...")
                }
              })
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
               setotpMsg("Otp is Valid. You can now Login to your Account")
               setOtpopen(false)
               setLoginOpen(true)
             }
             else {
               setotpMsg("Please enter correct Otp/Mobile no.")
             }
           }
        )}
  
    const change= () => {
      if(loginOpen===true){
        setLoginOpen(false)
        setSignUpOpen(true)
        setLoginMsg('')
        setRegMsg('')
        setotpMsg('')
      }
      else if(signupOpen===true){
        setLoginOpen(true)
        setSignUpOpen(false)
        setLoginMsg('')
        setRegMsg('')
        setotpMsg('')
      }
    }

    const Subscribe = () => {
      
    var obj = {
        email : emailbox.value
    }
    console.log(obj)

    const loginStatus = localStorage.getItem('loginstatus')
    
    if(loginStatus==='1'){
    OtherServices.Subscribe_here(obj).then(response=>response.json()).then(data=>
        {
            console.log(data)
        setOpen(true)
        setMsg(data.message)
         } 
         )}

         else {
            setLoginOpen(true)
         }}

  return (
    <div className="footer">
    <footer>
        <div className="row">
            <div className="col-md-4 col1">
                <img src={require("./images/image 1.png")}/>
               {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p> */}
                <ul>
                    <li><img src={require("./images/facebook-f-brands (1).jpg")}/></li>
                    <li><img src={require("./images/instagram-brands (1).jpg")}/></li>
                    <li><img src={require("./images/twitter-brands (1).jpg")}/></li>
                </ul>
            </div>
            <div className="col-md-1 extracol "></div> 
            <div className="col-md-4 quickcol">
              
              <h4 className='heading'>Quick Link</h4>
              <ul>
                  <li><Link to="/privacy_policy">Privacy Policy</Link></li>
                  <li><Link to="/terms_and_conditions">Terms and Condition</Link></li>
                  <li><Link to="/aboutus">About Us</Link></li>
              </ul>
          </div>
            <div className="col-md-4 col2">
                <h4>Contact Us</h4>
                <ul>
                    <li><a className="nav-link" href="tel:9522588588"><i className="fas fa-phone-alt"></i> 9522 588 588</a>

</li>
                    <li><img src={require("./images/Vector (2).jpg")}/>6391 Elgin St. Celina, Delaware 10299</li>
                </ul>
               {/* <ul className="subscribe">
                    <li><input type="text" placeholder="Email" ref={c=>emailbox=c} required/></li>
                    <li><button onClick={Subscribe} type='submit'>Subscribe</button></li>
  </ul>*/}
            </div>
            <div className="col-md-12 col3">
                <h6 className="text-center">Copyright © 2022 JandaniJewellers</h6>
            </div>
        </div>
        <Dialog open={open} onClose={(e) => setOpen(false)}>
        {msg}
        </Dialog>
        {loginOpen===true && 
                      <LoginBox open={loginOpen} onClose={(e) => setLoginOpen(false)}>
                        <div className="login">
                             <h2>LOGIN</h2>
                        <form className='loginform' onSubmit ={submitHandler}>
                        <input className="phone" type="text" placeholder=' Phone number' name="email_phone" ref={c=>loginphonebox=c} required/>
                        <input className='pass' type="password" placeholder=" Password " name="password" ref={c=>loginpassbox=c} required />
                        <button onClick={submitHandler} className="defaultButtonl" type="send">Log-in</button>
                        <p className='msg'>{loginMsg}</p>
                        </form>
                        <h3 className='loginh3' >Not having any Account?<button onClick={change} className="link" > SignUp</button></h3> 
                        </div>
                        </LoginBox>}

                    {signupOpen===true && <SignUpBox open={signupOpen} onClose={(e) => setSignUpOpen(false)}>
                       <div className='sign_up'>
                        <h2>SIGN UP</h2>
                       <form onSubmit={submitHandler2}>
                       <input type="text" placeholder=' Name ' name='name' ref={c=>namebox=c} required/>
                       <input type="text" placeholder=' Email ' name='email' ref={c=>emailbox=c} required/>
                       <input type="text" placeholder=' Phone Numbers ' name='phone' ref={c=>phonebox=c} required />
                       <input type="password" placeholder=' Password' name='password' ref={c=>passbox=c} required/>
                      <input type="password" placeholder='Confirm Password' name='confirmpassword' ref={c=>confirmPass=c} required />
                       <button className="defaultButtonsa" type='send'>Sign Up</button>
                       <p className='msgs'>{regMsg}</p>
                       </form>
                      <h3>Already a User? <button onClick={change} className="link" >Login</button></h3> 
                      </div> 
                        </SignUpBox>}

                      {Otpopen ===true && <SignupLoginbox open={Otpopen} onClose={(e) => setOtpopen(false)}>
                         <div className="enterotp">
                        <div>
                        <h2>Enter Otp</h2>
                        <form onSubmit ={submitHandler3}> 
                        <input type="text" placeholder="Phone No." ref={c=>otpphonebox=c} required/>
                        <input type="text" placeholder=' OTP' name="otp" ref={c=>otpbox=c} required/>
                       <button className="defaultButtono" type="send">Submit</button>
                      <p className='msgo'>{otpmsg}</p>
                      </form>
                      </div>
                      </div>
                     </SignupLoginbox>}
    </footer>
    
</div>
  )
  }

  export default Contact;