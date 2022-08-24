import React, { useState } from 'react';
import Login from '../Pages/Login'
import {Link} from 'react-router-dom'
import './LoginBox.css'

const LoginBox = (props) => {
  
        let dialog = (
            <div className='dialogStylesLogin'>          
              <Link to = "/" onClick={props.onClose} className='dialogCloseButtonStylesLogin'>X</Link>
            <div><Login/></div>
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