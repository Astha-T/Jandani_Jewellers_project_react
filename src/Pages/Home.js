import React from 'react';
import { useNavigate } from 'react-router-dom';

import Category from '../Components/Category'
import Slider from '../Components/Slider'
import SideBar from '../Components/SideBaar';
// import Contact  from '../Components/Contact';
// import Join from '../Components/Join';
import './Home.css'


const Home = (props) => { 

     
    const navigate = useNavigate();

     return (
        <div className='home'> 
        
          <div><SideBar/></div>
          <div className=' d-flex justify-content-center align-items-center btndiv'>
          <button onClick={() => navigate(-1)} className="prevBtn" ><span className="fa fa-arrow-left"/></button>
        <button onClick={() => navigate(+1)} className="nextBtn" ><span className="fa fa-arrow-right"/></button>
        </div> 
          <div><Slider/></div>
         
          <div><Category/></div>
         
</div>
     )
}

export default Home;