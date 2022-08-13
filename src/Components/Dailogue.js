import { faBottleDroplet } from '@fortawesome/free-solid-svg-icons';
import { removeData } from 'jquery';
import React from 'react';

let dialogStyles = {
    width: '300px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    border: "solid #B22D31",
    left: '50%',
    top: '8%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    fontWeight: 'bold',
    color: '#B22D31',
    backgroundColor: 'white',
    padding: '5px 20px 30px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
};

let dialogCloseButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
};



const Dialog = (props) => {

        let dialog = (
            <div style={dialogStyles}>
                <button style={dialogCloseButtonStyles} onClick={props.onClose}>x</button>

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


export default Dialog;