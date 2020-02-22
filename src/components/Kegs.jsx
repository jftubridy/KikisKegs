import React from 'react';
import PropTypes from 'prop-types';
import DrinksControl from './DrinksControl';

// function Kegs(props) {
//   const kegInfo =
//     <div>
//       <h4>{props.name}</h4>
//       <h4>{props.type} - {props.alcohol}</h4>
//       <hr />
//     </div>;
//   if (props.currentRouterPath === '/admin') {
//     return (
//       <div onClick={() => {props.onKegSelection(props.kegId); }}>
//         {kegInfo}
//         <DrinksControl />
//         <h4>{props.drinksLeft} drinks left in keg</h4>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <DrinksControl />
//         {kegInfo}
//         <hr/>
//       </div>
//     );
//   }
// }

function Kegs(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.type} - {props.alcohol}</h3>
      <DrinksControl />
      <h3>{props.drinksLeft}</h3>
    </div>
  );
}

Kegs.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  alcohol: PropTypes.string,
  drinks: PropTypes.number,
  picture: PropTypes.string,
  onKegSelection: PropTypes.func,
  drinksLeft: PropTypes.number
};

export default Kegs;