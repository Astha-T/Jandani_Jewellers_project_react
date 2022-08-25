import React, {useState} from 'react'
import $ from 'jquery'
import {Link, nav} from 'react-router-dom'
import { connect } from 'react-redux'

import Logo from './Logo'
import Dialog from './Dailogue'
import LoginBox from '../Components/LoginBox'
import Login from '../Pages/Login'
import SearchDialog from './SearchDailogue'
import ProductServices from '../Services/ProductServices'
import Store from '../Redux/Store'
import {ACTION_USER_LOGIN_LOGOUT} from '../Redux/Actions/UserAction'
import './Sidebar.css'

function mapStateToProps(state){
    return {
        loginstatus : state.user.loginstatus,
        full_name : state.user.full_name,
        user_id : state.user.user_id
    }
}

const SideBar= (props) => {
  
  const [open,setOpen] = useState(false)
  const [loginOpen,setLoginOpen] = useState(false)
  const [searchOpen,setSearchOpen] = useState(false)
  const [searchbar,setSearchBar] = useState(false)

  const openDailogue  = () => {
    setLoginOpen(true)
  }

  const displaySearcharBar = () => {
    setSearchBar(true)
  }

  const removeSearchBar = () => {
    setSearchBar(false)
    setSearchOpen(false)
  }

  const [products, setProducts] = useState([]); 
  const [msg,setMsg] = useState('');
  
   var keyWord = undefined;

  const handleFilter = (event) => {
    event.preventDefault();
    var searchWord = keyWord.value;
    console.log(searchWord)
    localStorage.setItem('keyValue',searchWord)

    ProductServices.Search_ProductbyKeyWord(searchWord).then(response=>response.json()).then(data=>{
      console.log(data.result)
      if(data.status==='0') {
        setSearchOpen(false)
         setOpen(true)
         setMsg(data.message)
      }
      else {
        setSearchOpen(true)
    const newFilter = data.result.map((value) => {
     return(value.name)
    });
  
    console.log(newFilter)
    
    if (searchWord === "") {
      setProducts([]);
      setSearchOpen(false)
    } else {
      setProducts(newFilter);
     console.log(products)
    }
  }
});
  
}


    var logout = ()=>{
    
        Store.dispatch({...ACTION_USER_LOGIN_LOGOUT,payload:{
            loginstatus : false,
            full_name : undefined,
            user_id : undefined
         }})
                  window.localStorage.removeItem('loginstatus')
                  window.localStorage.removeItem('user_id')
                  window.localStorage.removeItem('mobile')
                  window.localStorage.removeItem('full_name')
         alert("Logging Out...")
    }

    const Warning = () => {
      alert("Logging Out in 5 minutes...")
    }

    if(props.loginstatus ===true) {
      setTimeout(logout,18000000)
      setTimeout(Warning, 15000000)
    }

    return ( 
      <div className="main_header" id="headerup">
            <nav className="navbar my-navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                  <Link className="navbar-brand" to="#">
                   <Logo/>
                    </Link>
                  
                 <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">

                    <span
                      className="iconify fa fa-bars"
                      data-icon="fa-solid:bars"
                      data-inline="false"
                    ></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item nav-active">
                        <Link className="nav-link" to="/"
                          >Home <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item userli">
                        <ul>
                          <li>
                           <span className="fa fa-search"><Link to="#"
                            data-toggle="dropdown"></Link></span></li>
                          <li className="dropdown"><Link className="nav-link dropdown-toggle" to="#"
                            data-toggle="dropdown">Search By</Link>
                              <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/category_list" >Category</Link>
                                <Link className="dropdown-item" to="/product_list" >Product</Link>
                                <Link className="dropdown-item" to="#" onClick={displaySearcharBar} >Search Single Product</Link>
                              </div>
                            </li>
                        </ul>
                      </li>
                      {props.loginstatus ===true ? <>
                       <li className="nav-item userli">
                       <ul>
                     <li>
                          <span className="fa fa-cog"></span></li>
                         <li className="dropdown"><Link className="nav-link dropdown-toggle" to="#"
                           data-toggle="dropdown">User Settings</Link>
                             <div className="dropdown-menu">
                               <Link className="dropdown-item" to="/view_profile" >Your Profile</Link>
                               <Link className="dropdown-item" to="/favourite_products" >Favourite Products</Link>
                               <Link className="dropdown-item" to="/notifications" >Notifications</Link>
                     
                             </div>
                           </li>
                           </ul>
                     </li>
                     <li className="nav-item userli">
                     <ul>
                       <li>
                        <span className="fa fa-user"></span></li>
                       <li className="dropdown"><Link className="nav-link dropdown-toggle" to="#"
                         data-toggle="dropdown">Hi {props.full_name}</Link>
                           <div className="dropdown-menu">
                             <Link className="dropdown-item" to="#" onClick={logout}>Logout</Link>
                           </div>
                         </li>
                     </ul>
                   </li></>
                    : 
                   
                    <li className="nav-item signupli"> 
                      
                      <Link className="nav-link signup" to="#" onClick={openDailogue} data-toggle="modal" data-target="#basicModal">Login/Signup</Link>
                      <LoginBox open={loginOpen} onClose={(e) => setLoginOpen(false)}><Login/>
                      </LoginBox>
                      </li>
                    
                     }
                     </ul>
                  </div>

                  <form className="searchform" role="search" onSubmit={handleFilter}>
                  {searchbar===false && <button type="submit" onClick={displaySearcharBar} className='searchbutton'><span className="fa fa-search"
                       ></span></button>} &nbsp;&nbsp;
                          {searchbar===true &&<> <input className="searchbar" type="text" 
                          placeholder="Search For..." name="keyword" ref={c=>keyWord=c} required
                           onChange={handleFilter}/>
                          <button type="button" onClick={removeSearchBar} className='searchbutton'>
                          <span className="fa fa-close"></span></button></>}
                          <SearchDialog open={searchOpen} onClose={(e) => setSearchOpen(false)}/>
                          <Dialog oepn={open} onClose={(e) => setOpen(false)}>{msg}</Dialog>
                         
                  </form>
                  </div>
              </nav>
        </div>
    )
}

export default connect(mapStateToProps)(SideBar);