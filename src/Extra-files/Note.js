import React from 'react';

import './Note.css';

const Note = (props) => {
    
  return (
    
       <div className="row">
        <div className="col-md-3 col-xs-6 col-sm-6 col-6">
        <div className="n">
      <img src={props.image} alt="notification_image"/>
      <h5>{props.title}</h5>
      <p>{props.description}</p>
      </div>
    </div> 
    </div>
    
  );
};

export default Note;