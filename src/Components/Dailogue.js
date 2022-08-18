import { faBottleDroplet } from '@fortawesome/free-solid-svg-icons';
import { getSuggestedQuery } from '@testing-library/react';
import { removeData } from 'jquery';
import React from 'react';

let dialogStyles = {
    width: '300px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    border: "solid grey",
    left: '50%',
    top: '10%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'white',
    padding: '5px 20px 30px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
};

let dialogCloseButtonStyles = {
    marginBottom: '5px',
    padding: '0px 10px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '50px',
    height: '50px',
    color: 'grey',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    backgroundColor: 'transparent'
};



const Dialog = (props) => {

        let dialog = (
            <div style={dialogStyles}>
                <button style={dialogCloseButtonStyles} onClick={props.onClose}>X</button>

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