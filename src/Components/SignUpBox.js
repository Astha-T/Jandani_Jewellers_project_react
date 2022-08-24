import React from 'react';
import {Link} from 'react-router-dom'
import './SignUpBox.css'

const SignUpBox = (props) => {

        let dialog = (
            <div className="dialogStylesSignUp">
                <Link to = "/" onClick={props.onClose} className="dialogCloseButtonStylesSignUp">X</Link>
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