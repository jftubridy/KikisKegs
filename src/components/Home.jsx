import React from 'react';
import homepage from '../assets/images/kikisKegHomepage.jpg';

function Home() {
  const HomeStyle = {
    textAlign: 'center',
    color: 'red',
    fontSize: '40px',
    fontFamily: 'sans-serif'
  };
  return (
    <div style = {HomeStyle}>
      <h1><style jsx> {`
    // h1 {
    //   color: black;
    // }
    h1:hover {
      color: black;
      font-family: wingdings;
    }
    `}</style>Kikis Kegs</h1>
      <img src={homepage}/>
    </div>
  );
}

export default Home;