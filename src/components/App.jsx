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
import Admin from './Admin';
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
      masterKeg: [],
      //changed back to array from object
      //selectedKeg: null
    };
    this.handleAddingKeg = this.handleAddingKeg.bind(this);
    //this.handleChangeKeg = this.handleChangeKeg.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleAddingKeg(newKeg) {
    // var newKegId = v4();
    var newMasterKeg = this.state.masterKeg.slice();
    newMasterKeg.push(newKeg);
    this.setState({ masterKeg: newMasterKeg });
    //changed to this masterkeg var to see if it fixes.

    // var newMasterKeg = Object.assign({}, this.state.masterKeg, {
    //   [newKegId]: newKeg
    // });
    // //Object.keys(newMasterKeg).
    // this.setState({ masterKeg: newMasterKeg }
    // );
  }

  handleChangeKeg(kegId) {
    this.setState({ selectedKeg: kegId });
  }

  render() {
    return (
      <div style={BackgroundStyle}>
        
        <Header/>
        <Switch>
          {/* <Route exact path='/' render={() => <Home home={this.state.masterKeg} />} /> */}
          <Route exact path='/' component={Home} />
          <Route exact path='/AboutUs' component={AboutUs} /> 
          <Route exact path='/KegAdd' render={() => <KegAdd onKegCreation={this.handleAddingKeg} />} />
          {/* <Route exact path='/KegAdd' component={KegAdd} /> */}
          <Route path='/ViewKegs' render={() => <ViewKegs viewKegs={this.state.masterKeg} />} />
          {/* <Route exact path='/ViewKegs' component={ViewKegs} /> */}
          <Route path='admin' render={(props) => <Admin viewKegs={this.state.masterKeg}
            currentRouterPath={props.type.pathname}
            onKegSelection={this.handleChangeKeg}
            selectedKeg={this.state.selectedK} />} />
          <Route component={Error404} />
        </Switch>
        
      </div>
    );
  }

}

export default App;