import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  return (
    <div>
      <hr />
      <h2>{props.selectedKeg.name}</h2>
      <h3>{props.selectedKeg.type} - {props.selectedKeg.alcohol}</h3>
      <h3>{props.selectedKeg.drinksLeft}</h3>
    </div>
  );
}

KegDetail.propTypes = {
  selectedKeg: PropTypes.object
};

export default KegDetail;