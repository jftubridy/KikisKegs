import React from 'react';

function KegAdd(){
  return(
    <div>
      <h1><style jsx> {`
    h1 {
      color: black;
    }
    h1:hover {
      color: green;
    }
    `}</style>Add a Keg</h1>
    
      <form>
        <input  
          type='text'
          id='name'
          placeholder="Beverage Name"/>
        <input 
          type='text'
          id='type'
          placeholder='Type of Beverage'/>
        <textarea
          id='alcohol'
          placeholder='Alcohol content.'/>
      </form>
    </div>
  );
}

export default KegAdd;