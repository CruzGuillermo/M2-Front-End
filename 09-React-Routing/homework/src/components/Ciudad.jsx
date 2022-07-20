import React from "react";


export default function Ciudad({ city }) {
  return (
    <div >
      <div >
        <h2>{city.name}</h2>
        <div >
          <div>Temperatura: {city.temp} ºC</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind} km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div>
          <div>Latitud: {city.latitud}º</div>
          <div>Longitud: {city.longitud}º</div>
        </div>
      </div>
    </div>
  );
}

//V6
// import { useParams } from "react-router-dom";

// export default function Ciudad({ cities }) {
//   const { ciudadId2 } = useParams();

//   let city = cities.filter((c) => c.id === parseInt(ciudadId2))[0];

//   return (
//     <div className="ciudad" >
//       <div className="container" >
//         <h2>{city.name}</h2>
//         <div  className="info" >
//           <div>Temperatura: {city.temp} ºC</div>
//           <div>Clima: {city.weather}</div>
//           <div>Viento: {city.wind} km/h</div>
//           <div>Cantidad de nubes: {city.clouds}</div>
//           <div>Latitud: {city.latitud}º</div>
//           <div>Longitud: {city.longitud}º</div>
//         </div>
//       </div>
//     </div>
//   );
// }
