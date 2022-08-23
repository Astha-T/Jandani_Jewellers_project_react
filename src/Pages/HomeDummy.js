import React from 'react';

import CategoryList from '../Pages/CategoryList'
import Slider from '../Components/Slider'
import SideBar from '../Components/SideBaar';
import Contact  from '../Components/Contact';
import Join from '../Components/Join';
import './Home.css'


const Home = (props) => { 


     return (
        <div className='home'> 
          <div><SideBar/></div>
<<<<<<< HEAD
          <div><Slider/></div> 
=======
          <div className="slider"><Slider/></div> 
>>>>>>> c6230da2a65090dc862c19683f43d48923176048
          <div><CategoryList/></div>
          <div><Join/></div>
          <div><Contact/></div>
</div>
     )
}

export default Home;