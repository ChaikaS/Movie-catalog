import React, { useState } from "react";
import "./pagination.scss";
import { createPages } from "./pagesCreator";

export default function Pagination({ totalResults, setPageSelection }) {
  const numberPages = [];
  const [moviesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalResults / moviesPerPage);
  const paginate = (pageNumber) => {
    setPageSelection(pageNumber);
    setCurrentPage(pageNumber);
  };

  for (let i = 1; i <= createPages(numberPages, totalPages, currentPage); i++) {
    numberPages.push(i);
  }
  return (
    <div className="main__pagination">
      {numberPages.map((number) => (
        <div key={number} id={number} className={currentPage === number ? "main__pagination_item active" : "main__pagination_item"} onClick={() => paginate(number)}>
          {number}
        </div>
      ))}
    </div>
  );
}
// git commit -am "optimized app structure. fixed ui. fixed pagination,can wokr with a lot number of pages. fixed preloader."
