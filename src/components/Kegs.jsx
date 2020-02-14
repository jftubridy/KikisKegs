import React from 'react';
import PropTypes from 'prop-types';

function Kegs(props){
  return (
    <div>
      <h3>{props.type} - {props.name}</h3>
      <p>   <style global jsx>{`
        p {
          color: red;
        }
      `}</style><em>{props.alcohol} - {props.picture}</em></p>
      <hr/>
    </div>
  );
}
// propTypes is declaring a propTypes property on our Kegs componenent
// PropTypes is referring to the PropTypes class we import at the top
Kegs.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  alcohol: PropTypes.string,
  picture: PropTypes.string
};

export default Kegs;


/*
/MyExampleComponent.propTypes = {
  exampleArray: PropTypes.array,
  exampleBoolean: PropTypes.bool,
  exampleFunction: PropTypes.func,
  exampleNumber: PropTypes.number,
  exampleObject: PropTypes.object,
  exampleString: PropTypes.string,
  exampleSymbol: PropTypes.symbol,
  exampleReactElement: PropTypes.element,

  exampleArrayOfNumbers: PropTypes.arrayOf(PropTypes.number),
  exampleArrayOfStrings: PropTypes.arrayOf(PropTypes.string),

  exampleClassTypeProp: PropTypes.instanceOf(ExampleClassName),

  optionalEnum: PropTypes.oneOf(['ExampleClass', 'AnotherExampleClass']),
}
*/
