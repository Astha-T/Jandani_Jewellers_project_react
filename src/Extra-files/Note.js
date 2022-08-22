import React from 'react';
import {Link} from 'react-router-dom'
import './Note.css';

const Note = (props) => {
    
  return (
    
    <div className="col-md-3 col-sm-6 col-6 abc">
      <div className='note'>
      <img src={props.image} alt="notification_image"/>
      </div>
      <h5>{props.title}</h5>
      <h3>{props.id}</h3>
      <p>{props.description}</p>
      </div>
  );
}

export default Note;