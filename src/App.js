
import './App.css';
import {Component} from 'react';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Pagination from './components/Pagination';
// import Card from './components/Card';

class App extends Component {
constructor(){
  super()
  this.state = {
    countries: [],
    isLoading: false,
    index: 0,
    currentPage: 1,
    // pageNumber: index+1

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

handlePrev=()=>{
  console.log('clicked prev')
  const {index, countries} = this.state;
  if(index>0){
this.setState({index: index - 1})
  }
}

handleNext=()=>{
  console.log('next is clicked')
  const pagesCount=Math.floor(this.state.countries.length/21);
  const {index,countries} = this.state;
  if(index < pagesCount) {
    this.setState({index: index + 1})
  }
}

handleFirst=()=> {
this.setState({index: 0})
}

handleLast=()=> {
  const pagesCount = Math.floor(this.state.countries.length/21);
  this.setState({index: pagesCount})
}

changePage=(num)=> {
  this.setState({index:num})
}

render() {
  // const pagesCount=Math.ceil(countries.length/21);
  const {countries, isLoading, index} = this.state;
  return (
    <>
    <div className='main-container'>
      <h2 className='header'>WORLD COUNTRIES WITH REST API</h2>
      <div className='pagination'>
        <section>
         <p className='count'>{countries.length} countries</p>
        </section>
        <section className='flex'>
          <div>{index+1} / {Math.ceil(countries.length/21)}pages</div>
          <div>
          <Pagination>
            <Pagination.First onClick={()=>this.handleFirst(index)} />
            <Pagination.Prev onClick={this.handlePrev} />
            <Pagination.Item onClick={()=>this.changePage(0)}>{1}</Pagination.Item>
         
            <Pagination.Item onClick={()=>this.changePage(1)}>{2}</Pagination.Item>
            <Pagination.Item onClick={()=>this.changePage(2)}>{3}</Pagination.Item>
            <Pagination.Item onClick={()=>this.changePage(3)}>{4}</Pagination.Item>
            <Pagination.Item onClick={()=>this.changePage(4)}>{5}</Pagination.Item>
          
            <Pagination.Next onClick={this.handleNext} />
            <Pagination.Last onClick={this.handleLast} />
          </Pagination>
          </div>
        </section>
        </div>
        <div className='countries'>
          {isLoading ? (<>
            <div className='card'>
              {countries.map((country, index)=>
                <section className='each-card'>
                <img src={countries[index].flags.png} alt={countries[index].name.common} flag />
                <h4>{countries[index].name.common}</h4>
                <p><strong>Cap:</strong><span>{countries[index].capital}</span></p>
                <p><strong>Pop:</strong><span>{countries[index].population}</span></p>
              </section>
              // <Card key={ind} ind={ind} country={country} />
              )}
          
        </div>
          </>) : (
            <i
              className="fa fa-spinner fa-spin"
              style={{ fontSize: "48px" }}
            ></i>
          )}
        </div>
    </div>
    </>
  )
}
}
export default App



