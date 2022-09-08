import './SearchD.css'
import React from 'react';
import SearchProduct from './SearchProducts';

const SearchDialog = (props) => {

        let dialog = (
            <div className='dialogStyles'> 
              <SearchProduct/>
            </div>
        );

        if (!props.open) {
            dialog = null;
        }

        return (
            <div>
                {dialog}
            </div>
        );
    }


export default SearchDialog;