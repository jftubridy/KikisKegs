import React from 'react';
import Bartender from '../assets/images/whatCanIGetYou.jpg';

function AboutUs() {
  var myStyles = {
    color: 'white',
    fontSize: '30px',
  };
  return (
    <div>
      <h1> <style jsx> {`
    h1 {
      color: white;
    }
    `}</style>Owner:</h1>
      <img src={Bartender} />
      <p style={myStyles}>Hi I'm Kiki.  In my youth I owned a delivery service, but now I run this wonderful Tap House.  We have an extensive and growing list of beverages on tap, and I'm willing to fly to remote locations to obtain even the most obscure refreshments!</p>
      <hr/>
    </div>
  );
}

export default AboutUs;