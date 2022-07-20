import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  // console.log("ssssssssssssssss", props)
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch("No encontre la Ciudad");
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}