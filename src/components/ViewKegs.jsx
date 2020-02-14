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
    type: 'Soda',
    alcohol: 'non-alcoholic'
  },
  {
    name: 'Left Hand: Milk Stout Nitro',
    type: 'Stout',
    alcohol: '6.0%'
  },
  {
    name: 'Ghostfish: Grapefruit IPA',
    type: 'Gluten Free',
    alcohol: '5.5%'
  },
  {
    name: 'Reverend Nats: Sour Cherry',
    type: 'Cider',
    alcohol: '6.0%'
  },
  {
    name: 'Alpenfire: Traditional Heirloom',
    type: 'Cider',
    alcohol: '6.5%'
  },
  {
    name: 'Standard: Days in Arrears Munich Dunkel',
    type: 'Lager',
    alcohol: '4.8%'
  },
  {
    name: 'Pfriem: Triple IPA',
    type: 'India Pale Ale',
    alcohol: '10.5%'
  },
  {
    name: 'Alvarado Street: Local Shred Red',
    type: 'Red IPA',
    alcohol: '7.2%'
  },


];


function ViewKegs(){
  const PageStyle = {
    backgroundColor: '#99ccff'
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
    `}</style>Kegs currently on Tap</h1>
     
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
