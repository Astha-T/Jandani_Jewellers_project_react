import { useState } from "react";
import React from 'react'
import { useNavigate } from "react-router-dom";
import sanitizeHtml from 'sanitize-html'
import striptags from 'striptags'

import SideBar from "../Components/SideBaar";
// import Join from '../Components/Join';
import OtherServices from "../Services/OtherServices";
import './Terms&Conditions.css';
import Contact from "../Components/Contact";

const TermsConditions = () => {

    const navigate = useNavigate();
 const [displayTermsandConditions, setDisplaytermsandConditions] = useState("");

 OtherServices.TermsandConditions().then((response)=>response.json()).then(data=> {
       console.log(data)

       const updatedTandC = data.result.description
       const text = sanitizeHtml(updatedTandC)
       const finaltext = striptags(text)
       setDisplaytermsandConditions(finaltext)
    })

    return(
        <div className="tandc">
           <SideBar/>
           <div className='d-flex justify-content-center align-items-center btndiv'>
          <button onClick={() => navigate(-1)} className="prevBtn" ><span className="fa fa-arrow-left"/></button>
        <button onClick={() => navigate(+1)} className="prevBtn" ><span className="fa fa-arrow-right"/></button>
        </div>
            <h2 className="tandch2">Terms and Conditions</h2>
            <h3 className="tandch3">{displayTermsandConditions}</h3>
            {/*<Join/>*/}
            <Contact/>
        </div>
    )

}

export default TermsConditions;