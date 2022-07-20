import React from 'react';

export default function Card({max,min,img,name, onClose}) {
  // acá va tu código
  // console.log (props)
  return (
    <div>
      <button onClick={onClose}>X</button>
      <h5>Nombre de la Ciudad</h5>
      <h5>{name}</h5>
      <div>
       
        <p>min</p> <p>{min}</p>
        <p>max</p> <p>{max}</p>
      
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img" />
      
    </div>
  )}




// max: Temperatura Máxima.
// min: Temperatura Mínima.
// name: Nombre de la ciudad.
// img: nombre de la imagen que se debe mostrar.
// onClose: recibe una función que se va a ejecutar cuando el usuario haga click en el botón de cerrar.