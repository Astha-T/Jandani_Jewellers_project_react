import React, { useState } from 'react';
import Login from '../Pages/Login'
import {Link} from 'react-router-dom'
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
        }
        return (
            <div>
                {dialog}
            </div>
        );
    }


export default LoginBox;