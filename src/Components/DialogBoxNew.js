import React, { Component, useEffect, useState } from 'react';
import UserService from '../Services/UserServices';
import './DBox.css'

const DBox = (props) => {

      let dialog = (

            <div className='dialogStylesNew'>          
               <button onClick={props.onClose} className="dialogCloseButtonStylesNew">X</button>
               <div>{props.children}</div>
            </div>
        );

              
        if (!props.open) {
            dialog = null;
        }

           return (
            <div >
                {dialog}
            </div>
        );
            
    }


export default DBox;