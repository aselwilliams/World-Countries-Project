import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Countries from "./components/Countries";
import Paginate from "./components/Paginate";

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(18);
  const url = "https://restcountries.com/v3.1/all";

  const fetchData = () => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setCountries(data))
        .catch((err) => console.log(err));
    }, 1000);
  };

  useEffect(() => {
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
              <Paginate
                currentPage={currentPage}
                countries={countries}
                changePage={changePage}
                itemsPerPage={itemsPerPage}
              />
            </div>
          </section>
        </div>
        <div className="countries">
          <Countries currentItems={currentItems} />
          {isLoading && (
            <i
              className="fa fa-spinner fa-spin"
              style={{ fontSize: "48px" }}
            ></i>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
