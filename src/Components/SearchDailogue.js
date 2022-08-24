
import React from 'react';
import SearchProduct from './SearchProducts';

let dialogStyles = {
    width: '300px',
    height : 'fit-content',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '40%',
    transform: 'translate(-50%,-25%)',
    zIndex: '999',
    fontWeight: 'bold',
    color: '#B22D31',
    backgroundColor: 'white',
    padding: '5px 15px 0px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'row'

};

const SearchDialog = (props) => {

        let dialog = (
            <div style={dialogStyles}> 
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