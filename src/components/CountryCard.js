import React from 'react'

function CountryCard({country, index}) {
  return (
    <section className="each-card" key={index}>
          <img src={country.flags.png} alt={country.name.common} flag />
          <h4>{country.name.common}</h4>
          <p>
            <strong>Cap:</strong>
            <span>{country.capital}</span>
          </p>
          <p>
            <strong>Pop:</strong>
            <span>{country.population}</span>
          </p>
        </section>
  )
}

export default CountryCard