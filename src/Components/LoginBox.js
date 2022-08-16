import React, { useState } from 'react';
import Login from '../Pages/Login'
import {Link} from 'react-router-dom'

let dialogStyles = {
    width: '500px',
    height: '360px',
    margin: '0',
    position: 'fixed',
    border: "none",
    borderRadius: "33px",
    left: '50%',
    top: '45%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    fontWeight: 'bold',
    backgroundColor: 'white',
    padding: '10px 20px 0px',
    display: 'inline',
    flexDirection: 'column'
};

let dialogCloseButtonStyles = {
    cursor: 'pointer',
    border: 'none',
    color : 'grey',
    width: '50px',
    height: '50px',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    padding: '70px 430px',
    margin: '0px '
};


const LoginBox = (props) => {
  
        let dialog = (
            <div style={dialogStyles}>          
              <Link to = "/" onClick={props.onClose} style={dialogCloseButtonStyles}>X</Link>
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