
import './App.css';
import React,{Component} from 'react';
// import Pagination from 'react-bootstrap/Pagination';
// import Pagination from './components/Pagination';
// import Card from './components/Card';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      countries: [],
      isLoading: false,
      countriesPerPage: 18,
      currentPage: 1
    }
  }
  
  componentDidMount(){
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
      setTimeout(() => {
        this.setState({ countries: data, isLoading: true });
      }, 1000)
    )
    .catch((error)=>console.log(error))
  }
  
  
  handleClick = (event) => {
    // const {currentPage} = this.state
    this.setState({
      currentPage: Number(event.target.id)
    });
    //  console.log(currentPage, "currentPage")
  }

  
  render() {
    const {countries, isLoading, countriesPerPage, currentPage} = this.state;

    const lastIndex = currentPage * countriesPerPage
    const firstIndex = lastIndex - countriesPerPage
    const currentCountry = countries.slice(firstIndex, lastIndex)
    console.log(lastIndex, "lastIndex")
    console.log(firstIndex, "FIndex")
    console.log(currentCountry, "currentcountry")
    

    const displayC = isLoading ? (<>
      <div className='card'>
        {currentCountry.map((country, index)=>
          <section className='each-card'>
          <img src={country.flags.png} alt={country.name.common} flag />
          <h5>{country.name.common}</h5>
          <p><strong>Cap:</strong><span>{country.capital}</span></p>
          <p><strong>Pop:</strong><span>{country.population}</span></p>
        </section>
        )}
  </div>
    </>) : (
      <i
        className="fa fa-spinner fa-spin"
        style={{ fontSize: "48px" }}
      ></i>
    )
  
      let pageNumbers = [];
      for(let i=1; i <= (countries.length/countriesPerPage); i++){
          pageNumbers.push(i)
      }
      console.log(pageNumbers)
  
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className='page-link'
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

      return (
      <>
      <div className='main-container'>
        <h2 className='header'>WORLD COUNTRIES WITH REST API</h2>
        <div className='pagination'>
          <section>
           <p className='count'>{countries.length} countries</p>
          </section>
          <section className='flex'>
            <div>{currentPage}/{pageNumbers.length} pages</div>
            <div>
          

            <ul className='flex-links'>
              <li className='page-link'>prev</li>
              {renderPageNumbers}
              <li className='page-link'>next</li>
            </ul>
          
          
            </div>
          </section>
          </div>
          <div className='countries'>
            {displayC}
          </div>
      </div>
      </>
    )
  }
  }

export default App;





