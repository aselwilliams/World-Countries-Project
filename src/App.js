import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React,{Component} from 'react';
import { Pagination } from "react-bootstrap";
import Card from './Card'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      countries: [],
      isLoading: false,
      countriesPerPage: 18,
      currentPage: 1,
      countriesPerPage2:5,
      currentPage2:1
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

  // handleNext = () => {
  //   const { currentPage, countries, countriesPerPage } = this.state;
  //   if(currentPage < Math.ceil(countries.length/countriesPerPage)){
  //     this.setState({currentPage:currentPage + 1})
  //   } 
  // }
  
  // handlePrev = () => {
  //   const {currentPage} = this.state;
  //   if(currentPage > 1){
  //     this.setState({currentPage:currentPage - 1})
  //   } 
  // }
  handleFirst = () => {
    this.setState({currentPage:1})
  }

  handleLast = () => {
    const { countries, countriesPerPage } = this.state;
    const pageNumbers = Math.ceil(countries.length / countriesPerPage)
    this.setState({currentPage:pageNumbers})
  }
  handleNext = () => {
    const { currentPage, countries, countriesPerPage,countriesPerPage2 } = this.state;
    if(currentPage < Math.ceil(countries.length/countriesPerPage)){
      this.setState({currentPage:currentPage + 1})
    } 
    this.setState({currentPage2:Math.floor(currentPage/countriesPerPage2)+1})

  }

  handlePrev = () => {
    const {currentPage,currentPage2,countriesPerPage2} = this.state;
    if(currentPage > 1){
      this.setState({currentPage:currentPage - 1})
    } 
    if(currentPage2 > 1){
      this.setState({currentPage2:Math.floor(currentPage/countriesPerPage2)-1})
    }
  }
  // handleFirst = (index) => {
  //   const { countriesPerPage2,currentPage2 } = this.state;
  //   if(currentPage2>1){
  //     this.setState({currentPage2:currentPage2-1})
  //     this.setState({currentPage: index-countriesPerPage2})
  //   }
  // }

  // handleLast = (index) => {
  //   const { countriesPerPage2,currentPage2 } = this.state;
    
  //   if(currentPage2<countriesPerPage2){
  //     this.setState({currentPage2:currentPage2+1})
  //     this.setState({currentPage: index+countriesPerPage2})
  //   }
  // }

  render() {
    const {countries, isLoading, countriesPerPage, currentPage,currentPage2,countriesPerPage2} = this.state;

    const lastIndex = currentPage * countriesPerPage
    const firstIndex = lastIndex - countriesPerPage
    const currentCountry = countries.slice(firstIndex, lastIndex)
  
    let pageNumbers = [];
    for(let i=1; i <= Math.ceil(countries.length/countriesPerPage); i++){
        pageNumbers.push(i)
    }
    console.log(pageNumbers)
  
    const lastIndex2 = currentPage2 * countriesPerPage2
    const firstIndex2 = lastIndex2 - countriesPerPage2
    const currentCountry2 = pageNumbers.slice(firstIndex2, lastIndex2)
  

    const renderPageNumbers = currentCountry2.map(number => {
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
                  <Pagination.First onClick={()=>this.handleFirst(currentCountry2[0])} className={currentPage === 1 && 'disabled'} />
                  <Pagination.Prev onClick={this.handlePrev} className={currentPage === 1 && 'disabled'} />
                  {renderPageNumbers}
                  <Pagination.Next onClick={this.handleNext} className={currentPage === pageNumbers.length && 'disabled'} />
                  <Pagination.Last onClick={()=>this.handleLast(currentCountry2[0])} className={currentPage === pageNumbers.length && 'disabled'} />
                </Pagination>
              </div>
            </section>
          </div>
          <div className='countries'>
            {isLoading ? ( <Card currentCountry={currentCountry} />) : (
              <i
                className="fa fa-spinner fa-spin"
                style={{ fontSize: "48px" }}>
                </i>
                )}
          </div>
      </div>
      </>
    )
  }
  }

export default App;





