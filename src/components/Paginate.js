import React,{useContext} from "react";
import {GlobalContext} from '../context-api/GlobalContext'
import Pagination from "react-bootstrap/Pagination";

function Paginate() {
  const {currentPage, countries, changePage,itemsPerPage}=useContext(GlobalContext)
  return (
    <Pagination>
      <Pagination.First onClick={() => changePage(1)} />
      <Pagination.Prev
        onClick={() => changePage(currentPage > 1 ? currentPage - 1 : 1)}
        disabled={currentPage === 1 ? true : false}
      />
      <Pagination.Item
        onClick={() => changePage(currentPage > 5 ? currentPage - 4 : 1)}
      >
        {currentPage > 5 ? currentPage - 4 : 1}
      </Pagination.Item>

      <Pagination.Item
        onClick={() => changePage(currentPage > 5 ? currentPage - 3 : 2)}
      >
        {currentPage > 5 ? currentPage - 3 : 2}
      </Pagination.Item>
      <Pagination.Item
        onClick={() => changePage(currentPage > 5 ? currentPage - 2 : 3)}
      >
        {currentPage > 5 ? currentPage - 2 : 3}
      </Pagination.Item>
      <Pagination.Item
        onClick={() => changePage(currentPage > 5 ? currentPage - 1 : 4)}
      >
        {currentPage > 5 ? currentPage - 1 : 4}
      </Pagination.Item>
      <Pagination.Item
        onClick={() => changePage(currentPage > 5 ? currentPage : 5)}
      >
        {currentPage > 5 ? currentPage : 5}
      </Pagination.Item>

      <Pagination.Next
        disabled={
          currentPage === Math.ceil(countries.length / itemsPerPage)
            ? true
            : false
        }
        onClick={() =>
          changePage(
            currentPage < Math.ceil(countries.length / itemsPerPage)
              ? currentPage + 1
              : Math.ceil(countries.length / itemsPerPage)
          )
        }
      />
      <Pagination.Last
        onClick={() => changePage(Math.ceil(countries.length / itemsPerPage))}
      />
    </Pagination>
  );
}

export default Paginate;
