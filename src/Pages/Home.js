import React from 'react';

import Category from '../Components/Category'
import Slider from '../Components/Slider'
import SideBar from '../Components/SideBaar';
// import Contact  from '../Components/Contact';
// import Join from '../Components/Join';
import './Home.css'


const Home = (props) => { 

     return (
        <div className='home'> 
          <div><SideBar/></div>
          <div><Slider/></div> 
          <div><Category/></div>
         
</div>
     )
}

export default Home;