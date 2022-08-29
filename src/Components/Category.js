import React from 'react'
import '../Pages/CategoryList'
import CategoryList from '../Pages/CategoryList'
import Contact  from '../Components/Contact';
import Join from '../Components/Join';
import SideBaar from './SideBaar'
import './Category.css'

const Category = () =>
{
return(
<div>
  <div><SideBaar/></div>  
  <div className='cat'> <CategoryList /></div>  
  <div><Join/></div>
  <div><Contact/></div>
</div>
)
}

export default Category