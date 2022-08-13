import React from "react"

import './Cate_List.css'
import Cate from "./Cate";

const Cate_List = (props) => {
    return (
        <div className='category-list'>
            {props.categories.map((cate)=> (
                <Cate
                name = {cate.name}
                image = {cate.image}
                id = {cate.id}
                />
            ))}       
        </div>
    );
};

export default Cate_List;