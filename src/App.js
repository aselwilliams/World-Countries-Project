
import './App.css';
import {Component} from 'react';

class App extends Component {
constructor(){
  super()
  this.state={}
}
render(){
  return (
    <>
    <div className='main-container'>
      <div className='pagination'>
        <section>
         <p>250 countries</p>
        </section>
        <section>
          <div>1/16pages</div>
          <div>
            {/* <Pagination count={10} /> */}
          </div>
        </section>
        </div>
        <div className='countries'>
        <div className='card'>
          <section>
            <img/>
            <h3>Country name</h3>
            <h3>Cap:</h3><span>Country capital</span>
            <p><h3>Pop:</h3>
            Country population</p>
          </section>
        </div>


        </div>




    </div>
    </>
  )
}
}
export default App


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
