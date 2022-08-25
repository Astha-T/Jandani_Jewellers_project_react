import React from 'react';
import {Link} from 'react-router-dom'
import './SignUpBox.css'

const SignUpBox = (props) => {

        let dialog = (
            <div className="dialogStylesSignUp">
                <button onClick={props.onClose}  to = "/" className="dialogCloseButtonStylesSignUp">X</button>
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