import React, { useContext } from "react";
import Paginate from "../components/Paginate";
import { GlobalContext } from "../context-api/GlobalContext";

function TopSection() {
  const { countries, currentPage, itemsPerPage } = useContext(GlobalContext);
  return (
    <div className="pagination">
      <section>
        <h6 className="count">{countries.length} countries</h6>
      </section>
      <section className="flex">
        <h6>
          {currentPage} / {Math.ceil(countries.length / itemsPerPage)} pages
        </h6>
        <div>
          <Paginate />
        </div>
      </section>
    </div>
  );
}

export default TopSection;
