import React from 'react';
import PropTypes from 'prop-types';

function Kegs(props) {
  const kegInfo =
    <div>
      <h4>{props.name}</h4>
      <h4>{props.type} - {props.alcohol}</h4>
      <hr />
    </div>;
  if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => {props.onKegSelection(props.kegId); }}>
        {kegInfo}

      </div>
    );
  } else {
    return (
      <div>
        {kegInfo}
        <hr/>
      </div>
    );
  }
}

Kegs.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  alcohol: PropTypes.string,
  picture: PropTypes.string,
  onKegSelection: PropTypes.func
};

export default Kegs;