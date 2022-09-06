import React, {useState,useEffect} from 'react'
import {Link, Navigate} from 'react-router-dom'

import Logo from './Logo'
import Dialog from './Dailogue'
import LoginBox from '../Components/LoginBox'
import UserService from '../Services/UserServices'
import SignUpBox from './SignUpBox'
import SignupLoginbox from './SignupLoginbox'
import SearchDialog from './SearchDailogue'
import SearchProduct from './SearchProducts'
import ProductServices from '../Services/ProductServices'
import './Sidebar.css'

const SideBar= (props) => {
  
  const [open,setOpen] = useState(false)
  const [otpvalue,setOtpValue] = useState('')
  const [loginOpen,setLoginOpen] = useState(false)
  const [signupOpen,setSignUpOpen] = useState(false)
  const [searchOpen,setSearchOpen] = useState(false)
  const [searchbar,setSearchBar] = useState(false)
  const [Otpopen,setOtpopen] = useState(false)
  const [menu,setMenu] = useState(false)

  const loginStatus = localStorage.getItem('loginstatus')
    const Full_name = localStorage.getItem('full_name')


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
                  setLoginMsg(data.message)
                  window.location.reload(true)
                  setLoginOpen(false)
             }
                else if(loginStatus==='0'){
                  setIsLogin('0')
                   setLoginMsg(data.message)
                }
          })
     }     

     const submitHandler2 = (event) => {
      event.preventDefault();
        //  setRegMsg('Registration in Process...')

           var ob = {
                name : namebox.value,
                email : emailbox.value,
                mobile : phonebox.value,
                password : passbox.value,
                confirmPassword : confirmPass.value
            }
            console.log(ob)

            UserService.saveData(ob).then(response=>response.json()).then(data=>{
              if(data.status==='1')
              {
                console.log(data)
                setIsReg(true)
                setRegMsg(data.message)
                setSignUpOpen(false)
                setOtpopen(true)
                setOtpValue(data.data.mobile)
                setotpMsg("You Registerd Successfully!!!")
              }

              else if (data.status==='0' && data.message=== 'You are already exist'){
                console.log(data)
                setIsReg(true)
                setLoginMsg('You are already registered. Please Login.')
                setSignUpOpen(false)
                setLoginOpen(true)
                //setTimeout(setSignUpOpen(false),150000)
                // setTimeout(setLoginOpen(true), 150000)
              }
              else if(data.status==='0' && data.message!== 'You are already exist' ){
                setRegMsg(data.message)
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
             setLoginMsg("You can now Login to your Account")
             setOtpopen(false)
             setLoginOpen(true)
           }
           else {
             setotpMsg("Please enter correct Otp/Mobile no.")
           }
         }
      )}

  var logout = ()=>{
  
    alert("Logging Out...")

    localStorage.setItem('user_id', undefined);
    localStorage.setItem('mobile',undefined);
    localStorage.setItem('loginstatus','0');
    localStorage.setItem('full_name', undefined);
    localStorage.setItem('email',undefined);

    setIsLogin('0')
    setIsReg(false)
    setOtpIsValid(false)
    setLoginMsg('')
    setRegMsg('')
    setotpMsg('')

    window.location.reload(true)
}

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

  const Changemenu = () => {
    if(menu===true){
      setMenu(false)
    }
    else {
      setMenu(true)
    }
  }

  const displaySearcharBar = () => {
    setSearchBar(true)
  }
  const removeSearchBar = () => {
    setSearchBar(false)
    setSearchOpen(false)
  }

  const [products, setProducts] = useState([]); 
  const [msg,setMsg] = useState('');
  
   var keyWord = undefined;

  const handleFilter = (event) => {
    event.preventDefault();
    var searchWord = keyWord.value;
    console.log(searchWord)
    localStorage.setItem('keyValue',searchWord)

    const userId = localStorage.getItem('user_id');
    const keyValue = localStorage.getItem('keyValue')

    ProductServices.Search_ProductbyKeyWord(searchWord).then(response=>response.json()).then(data=>{
      console.log(data.result)
      if(data.status==='0') {
        setSearchOpen(false)
         setOpen(true)
         setMsg(data.message)
      }
      else {
        setSearchOpen(true)
    const newFilter = data.result.map((value) => {
     return(value.name)
    });
    
    if (searchWord === "") {
      setProducts([]);
      setSearchOpen(false)
    } else {
      setProducts(newFilter);
    }
  }
});
  
}
   
    // const Warning = () => { 
    //   alert("Logging Out in 5 minutes...")
    // }

    // if(loginStatus ===true) {
    //   setTimeout(logout,18000000)
    //   setTimeout(Warning, 15000000)
    // }

    return ( 
      
      <div className="main_header" id="headerup">
            <nav className="navbar my-navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                  <Link className="navbar-brand" to="#">
                   <Logo/>
                    </Link>
                  
                 <button onClick={Changemenu}
                    className="navbar-toggler border-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">

                   {menu===false ? <span
                      className="iconify fa fa-bars"
                      data-icon="fa-solid:bars"
                      data-inline="false"
                    ></span>

                    :<span
                    className="iconify fa fa-times"
                    data-icon="fa-solid:bars"
                    data-inline="false"
                  ></span>}
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item nav-active">
                        <Link className="nav-link" to="/"
                          >Home <span className="sr-only">(current)</span></Link>
                      </li>
                      {/* <li className="nav-item userli">
                        <ul>
                          <li>
                           <span className="fa fa-search"><Link to="#"
                            data-toggle="dropdown"></Link></span></li>
                          <li className="dropdown"><Link className="nav-link dropdown-toggle" to="#"
                            data-toggle="dropdown">Search By</Link>
                              <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/category_list" >Category</Link>
                                <Link className="dropdown-item" to="/product_list" >Product</Link>
                              </div>
                            </li>
                        </ul>
                      </li> */}
                      {/* <li className="nav-item nav-active">
                    <Link className="nav-link" to="/privacy_policy"
                      //     >Privacy Policy <span className="sr-only">(current)</span></Link>
                      // </li>
                      // <li className="nav-item nav-active">
                      // <Link className="nav-link" to="/terms_and_conditions"
                      //     >Terms and Conditions <span className="sr-only">(current)</span></Link>
                      // </li>
                      // <li className="nav-item nav-active">
                      // <Link className="nav-link" to="/aboutus"
                      //     >About Us <span className="sr-only">(current)</span></Link>
                      // </li>*/}
                      {islogin==='1' ?
                      <>
                       {/* <li className="nav-item userli ">
                       <ul>
                     <li>
                          <span className="fa fa-cog"><Link to="#"
                            data-toggle="dropdown"></Link></span></li>
                         <li className="dropdown"><Link className="nav-link dropdown-toggle" to="#"
                           data-toggle="dropdown">User Settings</Link>
                             <div className="dropdown-menu">
                               <Link className="dropdown-item" to="/view_profile" >Your Profile</Link>
                               <Link className="dropdown-item" to="/favourite_products" >Favourite Products</Link>
                               <Link className="dropdown-item" to="/notifications" >Check Notifications</Link>
                             </div>
                           </li>
                           </ul>
                     </li> */}
                     <li className="nav-item nav-active">
                      <Link className="nav-link" to="/view_profile"
                          >Your Profile <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item nav-active">
                      <Link className="nav-link" to="/favourite_products"
                          >Favourite Products <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item nav-active">
                      <Link className="nav-link" to="/notifications"
                          >Notifications <span className="sr-only">(current)</span></Link>
                      </li>
                       
                     <li className="nav-item signupli"> 
                      
                     <Link className="nav-link signup" onClick={logout} to="#">Logout</Link>
                           {/*<div className="dropdown-menu">
                             <Link className="dropdown-item" to="#" onClick={logout}>Logout</Link>
                    </div>*/}
                         </li>
                     </>

                   :

                    <li className="nav-item signupli"> 
                      
                      <Link className="nav-link signup" to="#" onClick={()=>setLoginOpen(true)} data-toggle="modal" data-target="#basicModal">Login/Signup</Link>
                      
                        {loginOpen===true && 
                      <LoginBox open={loginOpen} onClose={(e) => setLoginOpen(false)}>
                        <div className="login">
                             <h2>LOGIN</h2>
                             <p className='msg'>{loginMsg}</p>
                        <form className='loginform' onSubmit={submitHandler}>
                        <input className="phone" type="text" placeholder=' Phone number' name="email_phone" ref={c=>loginphonebox=c} required/>
                        <input className='pass' type="password" placeholder=" Password " name="password" ref={c=>loginpassbox=c} required />
                        <button onClick={submitHandler} className="defaultButtonl" type="send">Log-in</button>
                        
                        </form>
                        <h3 className='loginh3' >Not having any Account?<button onClick={change} className="link" > SignUp</button></h3> 
                        </div>
                        </LoginBox>}

                    {signupOpen===true && <SignUpBox open={signupOpen} onClose={(e) => setSignUpOpen(false)}>
                       <div className='sign_up'>
                        <h2>SIGN UP</h2>
                        <p className='msgs'>{regMsg}</p>
                       <form onSubmit={submitHandler2}>
                       <input type="text" placeholder=' Name ' name='name' ref={c=>namebox=c} required/>
                       <input type="text" placeholder=' Email ' name='email' ref={c=>emailbox=c} required/>
                       <input type="text" placeholder=' Phone Numbers ' name='phone' ref={c=>phonebox=c} required />
                       <input type="password" placeholder=' Password' name='password' ref={c=>passbox=c} required/>
                      <input type="password" placeholder='Confirm Password' name='confirmpassword' ref={c=>confirmPass=c} required />
                       <button className="defaultButtonsa" type='send'>Sign Up</button>
                       
                       </form>
                      <h3>Already a User? <button onClick={change} className="link" >Login</button></h3> 
                      </div> 
                        </SignUpBox>}

                      {Otpopen ===true && <SignupLoginbox open={Otpopen} onClose={(e) => setOtpopen(false)}>
                         <div className="enterotp">
                        <div>
                        <h2>Enter Otp</h2>
                        <p className='msgo'>{otpmsg}</p>
                        <form onSubmit ={submitHandler3}> 
                        <input type="text" value={otpvalue} style={{color: 'black'}} required/>
                        <input type="text" placeholder=' OTP' name="otp" ref={c=>otpbox=c} required/>
                       <button className="defaultButtono"type="send">Submit</button>
                      
                      </form>
                      </div>
                      </div>
                     </SignupLoginbox>}
                      
                      </li>}
                     </ul>
                  </div>

                  <form className="searchform" role="search">
                  {searchbar===false && <button type="submit" onClick={displaySearcharBar} className='searchbutton'><span className="fa fa-search"
                       ></span></button>} 
                          {searchbar===true &&<> <input className="searchbar" type="text" 
                          placeholder="Search For..." name="keyword" ref={c=>keyWord=c} required
                           onChange={handleFilter}/>
                          <button type="button" onClick={removeSearchBar} className='searchbutton'>
                          <span className="fa fa-close"></span></button></>}
                         <SearchDialog open={searchOpen} onClose={(e) => setSearchOpen(false)}><SearchProduct/></SearchDialog>
                          <Dialog oepn={open} onClose={(e) => setOpen(false)}>{msg}</Dialog>
                         
                  </form>
                  </div>
              </nav>
        </div>
    )
}

export default SideBar;