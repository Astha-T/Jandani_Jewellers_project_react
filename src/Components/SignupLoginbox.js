import React from 'react';
import {Link} from 'react-router-dom'
import './SLoginBox.css'

const SignupLoginbox = (props) => {
     
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
        <div className="dialogbox">
            {dialog}
        </div>
    );
}


export default SignupLoginbox;