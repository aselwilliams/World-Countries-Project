import { createContext,useState, useEffect } from "react";

export const GlobalContext=createContext();

export const GlobalProvider=({children})=>{
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = countries.slice(indexOfFirstItem, indexOfLastItem);

  const changePage = (page) => {
    console.log(page);
    setCurrentPage(page);
  };
    return (
        <GlobalContext.Provider value={{changePage, currentItems, isLoading, countries, currentPage, itemsPerPage}}>
            {children}
        </GlobalContext.Provider>
    )
}