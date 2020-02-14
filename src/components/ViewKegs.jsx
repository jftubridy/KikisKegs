import React from 'react';
import Kegs from './Kegs';
// import CEOHarold from '../assets/images/CEOHarold.jpg';
// import ChiefEditorHarold from '../assets/images/ChiefEditorHarold.jpg';
// import FinaceHarold from '../assets/images/FinanceHarold.jpg';
// import ReceptionistHarold from '../assets/images/ReceptionistHarold.jpg';
// import HrHarold from '../assets/images/HrHarold.jpg';



var masterViewKegs = [
  {
    name: 'Shirley Temple',
    location: 'Long Johns Seedy Bar',
    issue: 'The Bartender is watering down drinks!!!'
  },
  {
    name: 'Bob Marley',
    location: '4B',
    issue: 'Smoking mid'
  },
  {
    name: 'Imani and Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app.l :()'
  }

];


function ViewKegs(){
  const PageStyle = {
    backgroundColor: 'blue'
  };

  return (
    <div>
      <h1><style jsx> {`
    h1 {
      color: black;
    }
    h1:hover {
      color: green;
    }
    `}</style>View Kegs</h1>
     
      <hr/>
      <div style = {PageStyle}>
        {masterViewKegs.map((kegs, index) =>
          <Kegs name={kegs.name}
            type={kegs.type}
            alcohol={kegs.alcohol}
            key={index}/>
        )}
      </div>
    </div>
  );
}

export default ViewKegs;
