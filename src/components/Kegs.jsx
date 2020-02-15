import React from 'react';
import PropTypes from 'prop-types';

function Kegs(props){
  return (
    <div>
      <h3> Name: {props.name} - Category: {props.type}</h3>
      <p>   <style global jsx>{`
        p {
          color: red;
        }
      `}</style><em>Alcohol content: {props.alcohol} - {props.picture}</em></p>
      <hr/>
    </div>
  );
}

Kegs.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  alcohol: PropTypes.string,
  picture: PropTypes.string
};

export default Kegs;