import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React,{Component} from 'react';
import { Pagination } from "react-bootstrap";

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
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  handleNext = () => {
    const { currentPage, countries, countriesPerPage } = this.state;
    if(currentPage < countries.length/countriesPerPage){
      this.setState({currentPage:currentPage + 1})
    } 
  }
  
  handlePrev = () => {
    const {currentPage} = this.state;
    if(currentPage > 0 && currentPage!= 1){
      this.setState({currentPage:currentPage - 1})
    } 
  }
  handleFirst = () => {
    this.setState({currentPage:1})
  }

  handleLast = () => {
    const { countries, countriesPerPage } = this.state;
    const pageNumbers = Math.ceil(countries.length / countriesPerPage)
    this.setState({currentPage:pageNumbers})
  }

  render() {
    const {countries, isLoading, countriesPerPage, currentPage} = this.state;

    const lastIndex = currentPage * countriesPerPage
    const firstIndex = lastIndex - countriesPerPage
    const currentCountry = countries.slice(firstIndex, lastIndex)
   
    const displayCountries = isLoading ? (<>
      <div className='card'>
        {currentCountry.map((country, index)=>
          <section className='each-card'>
            <img src={country.flags.png} alt={country.name.common} flag />
            <h5>{country.name.common}</h5>
            <p><strong>Cap:</strong><span className={country.capital ? '' : 'no-record'}>{country.capital ? country.capital : "No record"}</span></p>
            <p><strong>Pop:</strong><span className={country.population ? '' : 'no-record'}>{country.population ? country.population : 'No record'}</span></p>
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
      for(let i=1; i <= Math.ceil(countries.length/countriesPerPage); i++){
          pageNumbers.push(i)
      }
      console.log(pageNumbers)
  
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <Pagination.Item
          className={currentPage===number && 'active'}
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </Pagination.Item>
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
                <Pagination>
                  <Pagination.First onClick={this.handleFirst} />
                  <Pagination.Prev onClick={this.handlePrev} className={currentPage === 1 && 'disabled'} />
                  {renderPageNumbers}
                  <Pagination.Next onClick={this.handleNext} className={currentPage === pageNumbers.length && 'disabled'} />
                  <Pagination.Last onClick={this.handleLast} />
                </Pagination>
              </div>
            </section>
          </div>
          <div className='countries'>
            {displayCountries}
          </div>
      </div>
      </>
    )
  }
  }

export default App;





