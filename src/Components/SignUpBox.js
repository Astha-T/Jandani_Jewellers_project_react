import React from 'react';
import {Link} from 'react-router-dom'

let dialogStyles = {
    width: '500px',
    height: '600px',
    maxWidth: '100%',
    margin: '0',
    position: 'fixed',
    border: "none",
    borderRadius: "33px",
    left: '50%',
    top: '60%',
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

const SignUpBox = (props) => {

        let dialog = (
            <div style={dialogStyles}>
                <Link to = "/" onClick={props.onClose} style={dialogCloseButtonStyles}>X</Link>
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


export default SignUpBox;