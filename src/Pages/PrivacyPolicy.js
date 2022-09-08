import { useState} from "react";
import React from 'react'
import sanitizeHtml from 'sanitize-html'
import striptags from 'striptags'

import SideBar from "../Components/SideBaar";
import OtherServices from '../Services/OtherServices';
import './PrivacyPolicy.css'
import Contact from "../Components/Contact";
import { useNavigate } from "react-router-dom";
// import Join from '../Components/Join';

const PrivacyPolicy1 = () => {
    
    const navigate = useNavigate();
    const [displayPrivacyPolicy, setDisplayPrivacyPolicy] = useState('');

       OtherServices.privacy_Policy().then((response)=>response.json()).then(data=> {
            
                console.log(data.result.description);
            
         const updatedPolicy= data.result.description;
         const text = sanitizeHtml(updatedPolicy)
         const finaltext = striptags(text)
         setDisplayPrivacyPolicy(finaltext);
        }
        )

    return(
        <div className='privacypolicy'>
            <SideBar/>
            <div className='d-flex justify-content-center align-items-center btndiv'>
            <button onClick={() => navigate(-1)} className="prevBtn" ><span className="fa fa-arrow-left"/> Prev</button>
          <button onClick={() => navigate('/')} className="nextBtn" ><span className="fa fa-arrow-right"/> Next</button>
          </div>
            <h2 className="privacyh2">Privacy Policy</h2>
            <h3 className="privacyh3">{displayPrivacyPolicy}</h3>
            {/*<Join/>*/}
            <Contact/>
        </div>
    )
}
export default PrivacyPolicy1;