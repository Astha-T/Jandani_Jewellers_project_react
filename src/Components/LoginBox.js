import React, { Component, useEffect, useState } from 'react';
import Login from '../Pages/Login'
import {Link} from 'react-router-dom'
import SignUp from '../Pages/SignUp'
import './LoginBox.css'

const LoginBox = (props) => {
    
      let dialog = (

            <div className='dialogStylesLogin'>          
               <button onClick={props.onClose} className="dialogCloseButtonStylesLogin">X</button>
              <div>{props.children}</div>
            </div>
        );

        if (!props.open) {
            dialog = null;
            document.body.style.overflow = 'unset';
        }

<<<<<<< HEAD
        if(props.open) {
            document.body.style.overflow = 'hidden';
          
        }
    
=======
        useEffect(() => {
        if(props.open) {
            document.body.style.overflow = 'hidden';
        }
    })
>>>>>>> 747834d17b718f7bc2168f89cc92ae45c4696d6f

        return (
            <div className="dialogbox">
                {dialog}
            </div>
        );
    }


export default LoginBox;