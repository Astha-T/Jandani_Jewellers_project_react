import { useState} from "react";
import React from 'react'

import SideBar from "../Components/SideBaar";
import Contact from "../Components/Contact";
import OtherServices from '../Services/OtherServices';
import classes from './AboutUs.module.css'

const AboutUs = () => {
    const [displayData, setDisplayData] = useState('');

       OtherServices.About_us().then((response)=>response.json.parse()).then(data=> {
            
                console.log(data.result.description);
            
         const updatedData= data.result.description;
         setDisplayData(updatedData);
        }
        )

    return(
        <div className={classes.aboutus}>
            <SideBar/>
            <h2>About Us</h2>
            <h3>{displayData}</h3>
            <Contact/>
        </div>
    )
}
export default AboutUs;