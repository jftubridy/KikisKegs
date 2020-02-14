import React from 'react';
import Bartender from '../assets/images/whatCanIGetYou.jpg';
import { withRouter } from 'react-router-dom';


function AboutUs() {
  var myStyles = {
    color: 'blue',
    fontSize: '30px',
    borderColor: 'white',
    textShadowColor: 'white',
    textShadowOffset: { width: 5, height: 5 },
    textShadow: {
      fontSize: 30,
      color: 'black',
      textShadowColor: 'white',
      testShadowOffset: { width: 5, height: 5 },
      textShadowRadius:10,
    },
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 600
  };
  return (
    <div><style jsx> {`
    p {
      color: black;
    }
    p:hover {
      color: orange;
      font-size: 30px;
      text-shadow: 0 0 3px #FF0444. 0 0 5px #0000FF;
      textShadow: {
        font-size: 30;
        color: black;
        text-shadow-color: white;
        text-shadow-offset: { width: 5, height: 5 };
        text-shadow-radius:10
      },
    }
    `}</style>
      <h1>Owner</h1>
      <img src={Bartender} />
      <p style={myStyles}>Hi I'm Kiki.  In my youth I owned a delivery service, but now I run this wonderful Tap House.  We have an exstensive and growing list of beverages on tap, and I'm willing to fly to remote locations to obtain even the most obscure refreshments!</p>
      <hr/>
    </div>
  );
}

export default AboutUs;