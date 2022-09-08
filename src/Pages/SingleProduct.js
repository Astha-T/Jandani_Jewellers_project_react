import { useState, useEffect } from "react";
import React from 'react'
import {useNavigate } from 'react-router-dom'
import sanitizeHtml from 'sanitize-html'
import striptags from 'striptags'
import LoginBox from '../Components/LoginBox'
import UserService from '../Services/UserServices'
import SignUpBox from '../Components/SignUpBox'
import SignupLoginbox from '../Components/SignupLoginbox'

import SideBar from "../Components/SideBaar";
import './SingleProduct.css';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import Join from '../Components/Join';
import Contact from "../Components/Contact";
import ProductServices from "../Services/ProductServices";
// import Enquiry from "../Components/Enquiry";
// import BookJewellery from "../Components/BookJewellery";
// import GetQuotation from "../Components/GetQuotation";
// import BooKAppointment from "../Components//BooKAppointment";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Pagination } from "swiper";

const SingleProduct = (props) => {
  const navigate = useNavigate();
  const loginStatus = localStorage.getItem('loginstatus')
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [displayProductName, setDisplayProductName] = useState('');
  const [displayProductImage, setDisplayProductImage] = useState();
  const [displayProductDes, setDisplayProductDes] = useState('');
  const userId = localStorage.getItem('user_id');
  const productId = localStorage.getItem('product_id');
  const [msg,setMsg] = useState('')
    const [otpvalue,setOtpValue] = useState('')
    const [open,setOpen] = useState(false)
    const [like,setLike] = useState('0')
    const [loginOpen,setLoginOpen] = useState(false)
  const [signupOpen,setSignUpOpen] = useState(false)
  const [Otpopen,setOtpopen] = useState(false)


  console.log(productId,userId)
  useEffect(() => {

    if(loginStatus==='0') {
    fetch('https://dev.weblaunchpad.in/jandani_jewellers/api/customer/get_single_product?product_id=' + productId)
      .then(res => res.json())
      .then(data => {
        console.log(data)

        const updatedproductImage = data.result.image
        setDisplayProductImage(updatedproductImage)

        const updatedproductName = data.result.name
        setDisplayProductName(updatedproductName)

        const updatedDescription = data.result.description
        const text = sanitizeHtml(updatedDescription)
        const finaltext = striptags(text)
        setDisplayProductDes(finaltext)

      })}

      else if(loginStatus==='1'){

        fetch('https://dev.weblaunchpad.in/jandani_jewellers/api/customer/get_single_product?product_id='+productId+'&user_id='+userId)
      .then(res => res.json())
      .then(data => {
        console.log(data)

        const updatedproductImage = data.result.image
        setDisplayProductImage(updatedproductImage)

        const updatedproductName = data.result.name
        setDisplayProductName(updatedproductName)

        const updatedDescription = data.result.description
        const text = sanitizeHtml(updatedDescription)
        const finaltext = striptags(text)
        setDisplayProductDes(finaltext)

        setLike(data.result.favorite)
      })}
      
  }, [productId,userId])

  const Like= () => {
    

  if(loginStatus==='1') {
  
      if(like==='0'){
        ProductServices.Add_fav().then(response=>response.json()).then(data=> {
        console.log(data)
        if(data.status==='1')
          {
            setLike('1')
          }
    })
  }

  else if(like==='1') {
      ProductServices.Remove_fav().then(response=>response.json()).then(data=> {
        console.log(data)
        if(data.status==='1')
        {
        setLike('0')
        }
        else if(data.status==='0')
        {
          setOpen(true)
          setMsg('Please click again to remove this product fom your favorite list')
        }
    })
    }
    
}
      }

      const alertmsg = () => {
      setLoginOpen(true)
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
                    setLoginMsg(data.message)
                    window.location.reload(true)
                    setLoginOpen(false)
               }
                  else {
                    setIsLogin('0')
                     setLoginMsg(data.message)
                  }
            })
       }     
  
       const submitHandler2 = (event) => {
        event.preventDefault();
           
  
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
                else if(data.status==='0' && data.message === 'You are already exist')
                {
                  console.log(data)
                  setIsReg(true)
                  setLoginMsg('You are already registered. Please Login.')
                  setSignUpOpen(false)
                  setLoginOpen(true)
                  // setSignUpOpen(false)
                  // setLoginOpen(true)

                  
                }
                else if(data.status==='0' && data.message !== 'You are already exist' ){
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


  return (
    <div className="singleProd">
      <SideBar />
      <div className='d-flex justify-content-center align-items-center btndiv'>
      <button onClick={() => navigate(-1)} className="prevBtn" ><span className="fa fa-arrow-left"/> Prev</button>
    <button className="disabled" ><span className="fa fa-arrow-right"/> Next</button>
    </div>
      <div className="container">
        <div className="row slider_row">
        <div className="col-md-12">
        <h4 className="producttitle">{displayProductName}</h4>
        
        </div>
          <div className="col-md-6">
          <div className="like2">
          {loginStatus==='1' && <button className="likebutton2" onClick={Like}>
           {like==='0' && <span className='fa fa-heart' style={{color : "white", fontSize: '25px'}}/> }                                                   
           {like==='1' && <span className='fa fa-heart' style={{color : "red" , fontSize: '25px'}}/>}
           </button>}
       
           {loginStatus==='0' && 
           <button className="likebutton2" onClick={alertmsg}>
           <span className='fa fa-heart' style={{color : "white", fontSize: '25px'}}/>      
           </button>       
           }
           
           </div>

            <Swiper
              style={{
                "--swiper-navigation-color": "black",
               
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide className="swiper_img">
                <div className=""><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide>
              <SwiperSlide className="swiper_img">
                <div className=""><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide>
              <SwiperSlide className="swiper_img">
                <div className=""><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide>
              <SwiperSlide className="swiper_img">
                <div className=""><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide>
              <SwiperSlide className="swiper_img">
                <div className=""><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide>
              <SwiperSlide className="swiper_img">
                <div className=""><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide>

            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide className="option_img">
                <div><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide>
              <SwiperSlide className="option_img">
                <div><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide>
              <SwiperSlide className="option_img">
                <div><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide>
              <SwiperSlide className="option_img">
                <div><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide >
              <SwiperSlide className="option_img">
                <div><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide>
              <SwiperSlide className="option_img">
                <div><img src={displayProductImage} className="img-fluid" alt="..." /></div>
              </SwiperSlide>

            </Swiper>






          </div>
          <div className="col-md-6 slider_txt ">
          <hr className="hr"/>
            <p className="pro_detail">{displayProductDes}</p>
            {/* <ul className="buton_lst">
          <li><Enquiry/></li>   
          <li className="sec_btn"><GetQuotation/></li>
          <li><BookJewellery/></li> 
          <li className="frth_btn"><BooKAppointment/></li>
          </ul> */}
          </div>
        </div>

      </div>
      {/*<Join/>*/}
      <Contact />
      {loginOpen===true && 
        <LoginBox open={loginOpen} onClose={(e) => setLoginOpen(false)}>
          <div className="login">
               <h2>LOGIN</h2>
               <p className='msg'>{loginMsg}</p>
          <form className='loginform' onSubmit ={submitHandler}>
          <input className="phone" type="text" placeholder=' Phone number' name="email_phone" ref={c=>loginphonebox=c} required/>
          <input className='pass' type="password" placeholder=" Password " name="password" ref={c=>loginpassbox=c} required />
          <button onClick={submitHandler} className="defaultButtonl" type="send">Log-in</button>
          </form>
          <h3 className='loginh3' >Not having any Account?<button className="link" onClick={change} > SignUp</button></h3> 
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
         <button className="defaultButtons" type='send'>Sign Up</button>
         
         </form>
        <h3 >Already a User? <button onClick={change} className="link" >Login</button></h3> 
        </div> 
          </SignUpBox>}

        {Otpopen ===true && <SignupLoginbox open={Otpopen} onClose={(e) => setOtpopen(false)}>
           <div className="enterotp">
          <div>
          <h2>Enter Otp</h2>
          <p className='msgo'>{otpmsg}</p>
          <form onSubmit ={submitHandler3}> 
          <input type="text" value={otpvalue}  ref={c=>otpphonebox=c}required/>
          <input type="text" placeholder=' OTP' name="otp" ref={c=>otpbox=c} required/>
         <button className="defaultButtono" type="send">Submit</button>

        </form>
        </div>
        </div>
       </SignupLoginbox>}
    </div>
  )

}

export default SingleProduct;