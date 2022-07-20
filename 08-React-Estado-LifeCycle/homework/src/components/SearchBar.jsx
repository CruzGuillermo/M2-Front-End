import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  // const handleInputChange = () => {
  //   e.preventDefault();
  //   setCity = (e.target.value)
  // }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      e.target[0].value= "";
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
        // {/* onChange={(e)=> handleInputChange(e)} 
      />
      <input type="submit" value="Buscar"  />
    
    </form>
  );
}

