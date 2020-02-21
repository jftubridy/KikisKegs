import React from 'react';
import PropTypes from 'prop-types';
import ViewKegs from './ViewKegs';
import KegDetail from './KegDetail';

function Admin(props) {
  let optionalSelectedKegContent = null;
  if (props.selectedKeg != null) {
    optionalSelectedKegContent = <KegDetail selectedKeg={props.viewKegs[props.selectedKeg]} />;
  }
  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedKegContent}
      <ViewKegs
        viewKegs={props.viewKegs}
        currentRouterPath={props.currentRouterPath}
        onKegSelection={props.onKegSelection} />
    </div>
  );
}

Admin.propTypes = {
  viewKegs: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func.isRequired,
  selectedKeg: PropTypes.string
};

export default Admin;