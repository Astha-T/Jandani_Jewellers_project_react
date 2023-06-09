import { useState} from "react";
import React from 'react'
import sanitizeHtml from 'sanitize-html'
import striptags from 'striptags'
import { useNavigate } from "react-router-dom";
import SideBar from "../Components/SideBaar";
 import Contact from "../Components/Contact";
//  import Join from '../Components/Join'
// import Contact from "../Components/Contact";
import OtherServices from '../Services/OtherServices';
import './AboutUs.css'

const AboutUs = () => {
    
    const navigate = useNavigate();

    const [displayData, setDisplayData] = useState('');

       OtherServices.About_us().then((response)=>response.json()).then(data=> {
            
                console.log(data.result.description);
            
         const updatedData= data.result.description;
         const text = sanitizeHtml(updatedData)
         const finaltext = striptags(text)
         setDisplayData(finaltext);
        }
        )

    return(
        <div className='aboutus'>
            <SideBar/>
            <div className='d-flex justify-content-center align-items-center btndiv'>
            <button onClick={() => navigate(-1)} className="prevBtn" ><span className="fa fa-arrow-left"/> Prev</button>
          <button onClick={() => navigate('/')} className="nextBtn" ><span className="fa fa-arrow-right"/> Next</button>
          </div>
            <h2 className="abh2">About Us</h2>
            <h3 className='data'>{displayData}</h3>

            {/*<Join/>*/}
            <Contact/> 

            {/* <Contact/> */}
        </div>
    )
}
export default AboutUs;