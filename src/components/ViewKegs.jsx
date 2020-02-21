import React from 'react';
import Kegs from './Kegs';
import PropTypes from 'prop-types';

function ViewKegs(props){
  const PageStyle = {
    backgroundColor: '#99ccff'
  };
  return (
    <div>
      <h1><style jsx> {`
    h1 {
      color: black;
      padding: 15px;
      margin: 15px;
      border-style: solid;
      border-color: black;
      border-width: 1px;
    }
    h1:hover {
      color: white;
    }
    `}</style>Kegs currently on Tap</h1>
     
      <hr/>
      <div style = {PageStyle}>
        {Object.keys(props.viewKegs).map(function (kegId) {
          var kegs = props.viewKegs[kegId];
          return <Kegs name={kegs.name}
            type={kegs.type}
            alcohol={kegs.alcohol}
            drinksLeft={kegs.drinksLeft}
            onKegSelection={kegs.onKegSelection}
            key={kegId}
            kegId={kegId} />;
        })}
      </div>
    </div>
  );
}

ViewKegs.propTypes = {
  viewKegs: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func
};

export default ViewKegs;