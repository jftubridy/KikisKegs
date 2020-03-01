import React from 'react';
//import { render } from 'react-dom';

class DrinksControl extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      drinks: 165
    };
    this.handleServeClick = this.handleServeClick.bind(this);
  }

  handleServeClick() {
    this.setState({
      drinks: this.state.drinks - 1,
    });
  }

  render() {
    return (
      <div>
        <p>Drinks Left: {this.state.drinks}</p> <button onClick={this.handleServeClick}>Serve a drink</button>
      </div>
    );
  }

}

export default DrinksControl;