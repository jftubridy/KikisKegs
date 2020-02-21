import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
//import Moment from 'moment';

function KegAdd(props) {
  let _name = null;
  let _type = null;
  let _alcohol = null;

  function handleNewKegSubmission(event) {
    event.preventDefault();
    props.onKegCreation({ name: _name.value, type: _type.value, alcohol: _alcohol.value, id: v4(), drinks: 165 });
    _name.value = '';
    _type.value = '';
    _alcohol.value = '';
  }

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
    
      <form onSubmit={handleNewKegSubmission}>
        <input  
          type='text'
          id='name'
          placeholder='Beverage Name'
          ref={(input) => {_name = input;}}/>
        <input 
          type='text'
          id='type'
          placeholder='Type of Beverage'
          ref={(input) => {_type = input;}}/>
        <input
          type='text'
          id='alcohol'
          placeholder='Alcohol content.'
          ref={(input) => { _alcohol = input; }} />
        <button type='submit'>Add Keg</button>
      </form>
    </div>
  );
}

KegAdd.propTypes = {
  onKegCreation: PropTypes.func
};

export default KegAdd;