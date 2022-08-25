import { useState } from "react";
import React from 'react'

import SideBar from "../Components/SideBaar";
import Join from '../Components/Join';
import OtherServices from "../Services/OtherServices";
import './Terms&Conditions.css';
import Contact from "../Components/Contact";

const TermsConditions = () => {
 const [displayTermsandConditions, setDisplaytermsandConditions] = useState("");

 OtherServices.TermsandConditions().then((response)=>response.json()).then(data=> {
       console.log(data)

       const updatedTandC = data.result.description
       setDisplaytermsandConditions(updatedTandC)
    })

    return(
        <div className="tandc">
           <SideBar/>
            <h2>Terms and Conditions</h2>
            <h3>{displayTermsandConditions}</h3>
            <Join/>
            <Contact/>
        </div>
    )

}

export default TermsConditions;