import React from 'react'
import '../Pages/CategoryList'
import CategoryList from '../Pages/CategoryList'
import './SideBaar'
import SideBaar from './SideBaar'
import './Category.css'

const Category = () =>
{
return(
<div>
  <div><SideBaar/></div>  
  <div className='cat'> <CategoryList /></div>  
</div>
)
}

export default Category