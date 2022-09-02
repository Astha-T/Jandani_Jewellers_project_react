import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import './Products.css'
import LoginBox from '../Components/LoginBox'
import UserService from '../Services/UserServices'
import SignUpBox from '../Components/SignUpBox'
import SignupLoginbox from '../Components/SignupLoginbox'
import ProductServices from '../Services/ProductServices'
import Dialog from '../Components/Dailogue'

const All_Productsbycate = (props) => {
    
    const loginStatus = localStorage.getItem('loginstatus')
    const [msg,setMsg] = useState('')
    const [open,setOpen] = useState(false)
    const [like,setLike] = useState(props.favorite)
    const [loginOpen,setLoginOpen] = useState(false)
  const [signupOpen,setSignUpOpen] = useState(false)
  const [Otpopen,setOtpopen] = useState(false)

    const setProductId = () => {
        localStorage.setItem('product_id', props.id)
    }

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

    const Like= () => {

    if(loginStatus==='1') {
    
        if(like==='0'){
          ProductServices.Add_fav().then(response=>response.json()).then(data=> {
          console.log(data)
          setOpen(true)
          setMsg(data.message)
          if(data.status==='1')
            {
              setLike('1')
            }
      })
    }

    else if(like==='1') {
        ProductServices.Remove_fav().then(response=>response.json()).then(data=> {
          console.log(data)
          setOpen(true)
          if(data.status==='1')
          {
          setLike('0')
          setMsg(data.message)
          }
          else if(data.status==='0')
          {
            setMsg('Please click again to remove this product fom your favorite list')
          }
      })
      }
      
}
        }

        const alertmsg = () => {
        setLoginOpen(true)
        }
        
    return (
<div className="col-md-3 col-sm-6 col-6 abc">
<figure className='figureProd' onClick={setProductId}>

<div className="like">
   {loginStatus==='1' && <button className="likebutton" onClick={Like}>
    {like==='0' && <span className='fa fa-heart' style={{color : "white", fontSize: '17px'}}/> }                                                   
    {like==='1' && <span className='fa fa-heart' style={{color : "red" , fontSize: '17px'}}/>}
    </button>}

    {loginStatus==='0' && 
    <button className="likebutton" onClick={alertmsg}>
    <span className='fa fa-heart' style={{color : "white", fontSize: '17px'}}/>      
    </button>       
    }
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
                        <h3 className='loginh3all' >Not having any Account?<button onClick={change} className="link" > SignUp</button></h3> 
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
                       <button className="defaultButtons" type='send'>Sign Up</button>
                       <p className='msgs'>{regMsg}</p>
                       </form>
                      <h3 className='signUph3'>Already a User? <button onClick={change} className="link" >Login</button></h3> 
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
   
    <Link onClick={setProductId} to="/singleProduct" >
            {/* <p className= 'circle'> */}
            <img src={props.image}/>
            {/*</p> */}
        </Link>
        </figure>
   <h3>{props.id}</h3>
   <h3>{props.favorite}</h3>
   <h5 style={{color: 'black'}}><Link  onClick={setProductId} to="/singleProduct">{props.name}</Link></h5>
   </div>
    )
}

export default All_Productsbycate;