import React from "react";
import CountryCard from './CountryCard'

function Countries({ currentItems }) {
  return (
    <div className="card">
      {currentItems.map((country, index) => (
          <CountryCard country={country} index={index} />
      ))}
    </div>
  );
}

export default Countries;
