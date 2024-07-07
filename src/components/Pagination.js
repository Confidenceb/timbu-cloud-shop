import React from "react";
import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page) => (
        <span
          key={page}
          className={`page-number ${page === currentPage ? "active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
