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
       <table>
        <tbody>
       <tr>
       <td><SideBar/></td>
       </tr>
        <tr>
      <td><Slider/></td> 
       </tr>
       <tr>
         <td><CategoryList/></td>
       </tr>
       <tr>
         <td><Join/></td>
       </tr>
       <tr>
         <td><Contact/></td>
       </tr>
       </tbody>
       </table>
</div>
     )
}

export default Home;