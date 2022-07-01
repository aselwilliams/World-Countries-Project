import React, { useContext } from "react";
import { GlobalContext } from "../context-api/GlobalContext";
import CountryCard from './CountryCard'

function Countries() {
  const {currentItems}=useContext(GlobalContext)
  return (
    <div className="card">
      {currentItems.map((country, index) => (
          <CountryCard country={country} key={index}/>
      ))}
    </div>
  );
}

export default Countries;
