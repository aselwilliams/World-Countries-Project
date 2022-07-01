import React from 'react'

function CountryCard({country}) {
  return (
    <section className="each-card" >
          <img src={country.flags.png} alt={country.name.common} flag />
          <h4>{country.name.common}</h4>
          <p>
            <strong>Cap:</strong>
            <span className={country.capital ? '' : 'no-record'}>{country.capital ? country.capital : "No record"}</span>
          </p>
          <p>
            <strong>Pop:</strong>
            <span className={country.population ? '' : 'no-record'}>{country.population ? country.population : 'No record'}</span>
          </p>
        </section>
  )
}

export default CountryCard