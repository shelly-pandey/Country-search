import React from 'react';

export default function Search({value, handleChange}) {
        
  return ( 
  <div>
    <label> Search </label>
    <input type="text" value={value} onChange={handleChange}/>
  </div>
    );
  

}
