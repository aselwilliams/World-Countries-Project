import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './App.css';

class Card extends Component{
constructor({props}){
    super()
}

render(){
    return(
    <div>
      <div className='card'>
        {this.props.currentCountry.map((country, index)=>
          <section className='each-card'>
            <img src={country.flags.png} alt={country.name.common} flag />
            <h5>{country.name.common}</h5>
            <p><strong>Cap:</strong><span className={country.capital ? '' : 'no-record'}>{country.capital ? country.capital : "No record"}</span></p>
            <p><strong>Pop:</strong><span className={country.population ? '' : 'no-record'}>{country.population ? country.population : 'No record'}</span></p>
          </section>
        )}
      </div>
    </div>
    )
}
}
export default Card