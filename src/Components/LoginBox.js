import React, { useState } from 'react';
import Login from '../Pages/Login'
import {Link} from 'react-router-dom'

let dialogStyles = {
    width: '420px',
    height: '420px',
    maxWidth: '100%',
    margin: '0',
    position: 'fixed',
    border: "solid #B22D31",
    borderRadius: "33px",
    left: '620px',
    top: '25%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    fontWeight: 'bold',
    backgroundColor: 'white',
    padding: '10px 20px 0px',
    display: 'flex',
    flexDirection: 'column'
};

let dialogCloseButtonStyles = {
    padding: '5px 8px',
    cursor: 'pointer',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#B22D31',
    color : 'white',
    width: '30px',
    margin: '20px 500px 0px 0px',
    height: '30px',
    fontWeight: 'bold'
};


const LoginBox = (props) => {
  
        let dialog = (
            <div style={dialogStyles}>
                 <Link to = "/jandani_jewellers_react" onClick={props.onClose} style={dialogCloseButtonStyles}>x</Link>

                <div><Login/>
                </div>
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