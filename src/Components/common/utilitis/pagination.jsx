import React from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationComponent = ({ pageCount, currentPage, onPageChange }) => {
  const pages = Array.from(Array(pageCount)).map((_, index) => index + 1);

  return (
    <Pagination size="sm">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PaginationComponent;
