import React from 'react'
import '../Pages/CategoryList'
import {Link} from 'react-router-dom'
import './Category.css'

const Category = () =>
{
 const setcate7 = () => localStorage.setItem('category_id',7)
 const setcate8 = () => localStorage.setItem('category_id',8)
 const setcate9 = () => localStorage.setItem('category_id',9)
 const setcate10 = () => localStorage.setItem('category_id',10)
 const setcate11 = () => localStorage.setItem('category_id',11)

return(
<div className="category_section">
                <h4>Shop by categories</h4>
                <div className="category-list row">
                <div className="col-md-1 d-sm-block d-none"></div>
                    <div className="col-md-2 col-sm-6 col-6">
                            <Link onClick={setcate7} to="/productbycate_list">
                            <figure className='figureCate'>
                              <img src={require('./images/Bangles3.png')}/>
                              </figure></Link>
                    
                    <h5><Link onClick={setcate7} to="/productbycate_list">BANGLES</Link></h5>
                    </div>
                    <div className="col-md-2 col-sm-6 col-6">
                            <Link onClick={setcate8} to="/productbycate_list">
                            <figure className='figureCate'>
                              <img src={require("./images/earring.jpg")}/>
                              </figure></Link>
                    
                    <h5><Link onClick={setcate8} to="/productbycate_list">EAR RING</Link></h5>
                    </div>
                    <div className="col-md-2 col-sm-6 col-6">
                            <Link onClick={setcate9} to="/productbycate_list">
                            <figure className='figureCate'>
                              <img src={require("./images/necklace.jpg")}/>
                              </figure></Link>
                    
                    <h5><Link onClick={setcate9} to="/productbycate_list">NECKLACE</Link></h5>
                    </div>
                    <div className="col-md-2 col-sm-6 col-6">
                            <Link onClick={setcate10} to="/productbycate_list">
                            <figure className='figureCate'>
                              <img src={require("./images/pendant2.jpg")}/>
                              </figure></Link>
                    
                    <h5><Link onClick={setcate10} to="/productbycate_list">PENDANT</Link></h5>
                    </div>
                    <div className="col-md-2 col-sm-6 col-6">
                            <Link  onClick={setcate11} to="/productbycate_list">
                            <figure className='figureCate'>
                              <img src={require("./images/ring3.jpg")}/>
                              </figure></Link>
                    
                    <h5><Link onClick={setcate11}  to="/productbycate_list">DIAMOND RING</Link></h5>
                    </div>
                    <div className="col-md-1 d-sm-block d-none"></div>
                </div>
            </div>
)
}

export default Category