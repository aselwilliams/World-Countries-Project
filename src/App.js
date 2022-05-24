import "./App.css";
import { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage,setItemsPerPage] = useState(18)

  const fetchData = (url) => {
    setTimeout(() => {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => setCountries(data))
        .catch((err) => console.log(err));
    }, 1000);
  };

  useEffect(() => {
    // setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, [currentPage]);

  //Get current countries
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = countries.slice(indexOfFirstItem, indexOfLastItem);

  const changePage = (page) => {
    console.log(page);
    setCurrentPage(page);
  };

  return (
    <>
      <div className="main-container">
        <h2 className="header">WORLD COUNTRIES WITH REST API</h2>
        <div className="pagination">
          <section>
            <p className="count">{countries.length} countries</p>
          </section>
          <section className="flex">
            <div>
              {currentPage} / {Math.ceil(countries.length / itemsPerPage)}pages
            </div>
            <div>
              <Pagination>
                <Pagination.First onClick={() => changePage(1)} />
                <Pagination.Prev onClick={() => changePage(currentPage>1 ? currentPage - 1 : 1)} />
                <Pagination.Item
                  onClick={() =>
                    changePage(currentPage > 5 ? currentPage - 4 : 1)
                  }
                >
                  {currentPage > 5 ? currentPage - 4 : 1}
                </Pagination.Item>

                <Pagination.Item
                  onClick={() =>
                    changePage(currentPage > 5 ? currentPage - 3 : 2)
                  }
                >
                  {currentPage > 5 ? currentPage - 3 : 2}
                </Pagination.Item>
                <Pagination.Item
                  onClick={() =>
                    changePage(currentPage > 5 ? currentPage - 2 : 3)
                  }
                >
                  {currentPage > 5 ? currentPage - 2 : 3}
                </Pagination.Item>
                <Pagination.Item
                  onClick={() =>
                    changePage(currentPage > 5 ? currentPage - 1 : 4)
                  }
                >
                  {currentPage > 5 ? currentPage - 1 : 4}
                </Pagination.Item>
                <Pagination.Item
                  onClick={() => changePage(currentPage > 5 ? currentPage : 5)}
                >
                  {currentPage > 5 ? currentPage : 5}
                </Pagination.Item>

                <Pagination.Next onClick={() => changePage(currentPage<Math.ceil(countries.length / itemsPerPage) ? currentPage + 1 : Math.ceil(countries.length / itemsPerPage))} />
                <Pagination.Last onClick={() => changePage(Math.ceil(countries.length / itemsPerPage))} />
              </Pagination>
            </div>
          </section>
        </div>
        <div className="countries">
          
              <div className="card">
                {currentItems.map((country, index) => (
                  <section className="each-card" key={index}>
                    <img
                      src={country.flags.png}
                      alt={country.name.common}
                      flag
                    />
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
                ))}
              </div>
          {isLoading && 
            <i
              className="fa fa-spinner fa-spin"
              style={{ fontSize: "48px" }}
            ></i>
          }
        </div>
      </div>
    </>
  );
}

export default App;

//   const url = "https://restcountries.com/v3.1/all";
