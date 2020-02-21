import React from 'react';
import Header from './Header';
// import Kegs from './Kegs';
import { Switch, Route } from 'react-router-dom';
import ViewKegs from './ViewKegs';
import Error404 from './Error404';
import AboutUs from './AboutUs';
import Home from './Home';
import KegAdd from './KegAdd';
import { v4 } from 'uuid';
import Image from '../assets/images/background-wood.jpg';

const BackgroundStyle = {
  // /* The image used */
  backgroundImage: `url(${Image})`,

  /* Full height */
  backgroundPosition: 'fixed', 
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat',
  minHeight: '100vh',
  minWidth: '100%'
};

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {},
      selectedKeg: null
    };
    this.handleAddingKeg = this.handleAddingKeg.bind(this);
    this.handleChangeKeg = this.handleChangeKeg.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleAddingKeg(newKeg) {
    var newKegId = v4();
    var newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg
    });
    //Object.keys(newMasterKegList).
    this.setState({ masterKegList: newMasterKegList }
    );
  }

  handleChangingSelectedKeg(kegId) {
    this.setState({ selectedKeg: kegId });
  }

  render() {
    return (
      <div style={BackgroundStyle}>
        
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/AboutUs' component={AboutUs} /> 
          <Route path='/ViewKegs' render={() => <ViewKegs kegList={this.state.masterKegList} />} />
          <Route exact path='/KegAdd' render={() => <KegAdd onNewKegCreation={this.handleAddingKeg} />} />
          <Route component={Error404} />
        </Switch>
        
      </div>
    );
  }

}

export default App;