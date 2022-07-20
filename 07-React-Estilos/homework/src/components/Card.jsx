import React from 'react';
import "./Card.modules.css"


export default function Card({max,min,img,name, onClose}) {
  // acá va tu código
  return (
    <div className='general'>
      
      <button className='button' onClick={onClose}>X</button>
      {/* <h5>Nombre de la Ciudad</h5> */}
      <h5>{name}</h5>
      <div className='container'>
      <div>
        <h6>Max</h6> 
        <p>{Math.floor(max - 273.15)}</p>
      </div>
      <div>
        <h6>Min</h6>
        <p>{Math.floor(min -  273.15)}</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img" />
      </div>
    </div>
  )}

