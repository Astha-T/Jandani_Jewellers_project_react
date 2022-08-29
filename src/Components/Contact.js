
import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from "react-redux"

import OtherServices from '../Services/OtherServices'
import Dialog from '../Components/Dailogue'
import './Contact.css'

const Contact = (props) =>
{
    var emailbox= undefined;
    const [msg,setMsg] = useState('');
    const [open,setOpen] = useState(false)
    
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
            setOpen(true)
        setMsg("Please Login to your account!!!")
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
              
              <h4>Quick Link</h4>
              <ul>
                  <li><Link to="/privacy_policy">Privacy Policy</Link></li>
                  <li><Link to="/terms_and_conditions">Terms and Condition</Link></li>
                  <li><Link to="/aboutus">About Us</Link></li>
              </ul>
          </div>
            <div className="col-md-4 col2">
                <h4>Contact Us</h4>
                <ul>
                    <li><Link to="tel:208-555-0112"><img src={require("./images/Vector (1).jpg")}/>(208) 555-0112</Link></li>
                    <li><img src={require("./images/Vector (2).jpg")}/>6391 Elgin St. Celina, Delaware 10299</li>
                </ul>
                <ul className="subscribe">
                    <li><input type="text" placeholder="Email" ref={c=>emailbox=c} required/></li>
                    <li><button onClick={Subscribe} type='submit'>Subscribe</button></li>
                </ul>
            </div>
            <div className="col-md-12 col3">
                <h6 className="text-center">Copyright © 2022 JandaniJewellers</h6>
            </div>
        </div>
        <Dialog open={open} onClose={(e) => setOpen(false)}>
        {msg}
        </Dialog>
    </footer>
    
</div>
  )
  }

  export default Contact;