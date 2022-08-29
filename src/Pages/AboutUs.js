import { useState} from "react";
import React from 'react'
import sanitizeHtml from 'sanitize-html'
import striptags from 'striptags'

import SideBar from "../Components/SideBaar";
 import Contact from "../Components/Contact";
 import Join from '../Components/Join'
import OtherServices from '../Services/OtherServices';
import './AboutUs.css'

const AboutUs = () => {
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
            <h2>About Us</h2>
            <h3 className='data'>{displayData}</h3>
            <Join/>
            <Contact/> 
        </div>
    )
}
export default AboutUs;