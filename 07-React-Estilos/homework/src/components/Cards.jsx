import React from 'react';
import cities from '../data';
import Card from './Card';
import "./Cards.modules.css"


export default function Cards(data, index) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div >
      {
        cities.map(c => 
          <Card
          max={c.main.temp_max}
          min={c.main.temp_min}
          name={c.name}
          img={c.weather[0].icon}
          onClose={() => alert(c.name)}
          key={index}
          />
        )
      }
    </div>
  )
 
    
  
  
};