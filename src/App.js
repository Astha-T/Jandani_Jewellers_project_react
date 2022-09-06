import React from 'react';
import { useNavigate } from 'react-router-dom';

import Home from './Pages/Home'
import Contact  from './Components/Contact';
// import Join from './Components/Join';
// import Abc from './Mypage';
import './App.css'

const App = (props) =>
{
    const navigate = useNavigate();
    
    return (
        <div>
       
    <div><Home/></div> 
    {/*<div><Abc/></div>*/}
    {/*<div><Join/></div>*/}
    <div><Contact/></div>
     </div>
    )
    }

export default App;





