import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function KegAdd(){
  return(
    <div>
      <h1><style jsx> {`
    h1 {
      color: black;
    }
    h1:hover {
      color: red;
    }
    `}</style>Add a Keg</h1>
    
      <form>
        <input  
          type='text'
          id='name'
          placeholder="Beverage Name"/>
        <input 
          type='text'
          id='type'
          placeholder='Type of Beverage' />
        <input
          type='text'
          id='alcohol'
          placeholder='Alcohol content.'/>
        {/* <textarea
          id='alcohol'
          placeholder='Alcohol content.'/> */}
        
        {/* function handleClick(e) {
          e.preventDefault();
        alert('The keg was added');
        }
        return (
          <a href='#' onClick={handleClick}>
          <button className='btn btn-caution'>Add this Keg</button>
          </a>
          );    This code is trying to make a button, but is not working yet. 
           */}
      </form>
    </div>
  );
}

export default KegAdd;