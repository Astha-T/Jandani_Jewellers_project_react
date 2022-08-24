import React from 'react';
import {Link} from 'react-router-dom'
import './SignupLogin.css'

const SignupLoginbox = (props) => {
     
    let dialog = (
        <div className='dialogStyles'>          
          <Link to = "/" onClick={props.onClose} className='dialogCloseButtonStyles'>X</Link>
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


export default SignupLoginbox;