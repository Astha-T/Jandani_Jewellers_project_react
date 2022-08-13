import React from 'react'
import { Link } from 'react-router-dom';

import './Slider.css'

const Slider = () => {
    return(
        <div className="sec_section">
        <div className="row">
        <div className="col-md-12 banner">
        <section className="slider-section">
        <div id="carousel" className="carousel slide" data-ride="carousel">
           
            <ol className="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" className="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
            </ol> 
    
          
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                <img src={require('./images/banner_jwellry.jpg')} alt="img"/>
                </div> 
    
                <div className="carousel-item">
                    <img src={require('./images/banner_jwellry2.jpg')} alt="img"/>
                </div> 
    
                <div className="carousel-item">
                    <img src={require('./images//banner_jwellry3.jpg')} alt="img"/>
                </div>
                </div>

            <Link to="#carousel" className="carousel-control-prev" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </Link>
            <Link to="#carousel" className="carousel-control-next" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </Link>
        </div> 
    </section>
    </div>
    </div>
    <div className='icon'><img src={require("./images/Group 8428.png")} alt="img"/></div> 
      </div>
    )
}

export default Slider;