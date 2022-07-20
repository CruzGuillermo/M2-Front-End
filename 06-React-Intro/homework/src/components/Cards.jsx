import React from 'react';
import cities from '../data';
import Card from './Card';


export default function Cards(data) {
  // acá va tu código
  // tip, podés usar un map
  //  console.log("=======", data)
  if (cities){
  return (
    <div>
      {
        cities.map(c => 
          <Card
          max={c.main.temp_max}
          min={c.main.temp_min}
          name={c.name}
          img={c.weather[0].icon}
          onClose={() => alert(c.name)}
          key={c.id}
          />
        )
      }
    </div>
  )
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
    
  
  
};