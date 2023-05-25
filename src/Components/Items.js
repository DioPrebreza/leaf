import React, { useState, useEffect } from "react";
import { useCollection } from "../hooks/useCollection";
import ReactPaginate from "react-paginate";

import "./Items.css";

const Items = () => {
  const { documents, error } = useCollection("items");
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  const PER_PAGE = 2;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(data.length / PER_PAGE);
  const currentPageData = data.slice(offset, offset + PER_PAGE);

  useEffect(() => {
    if (documents) {
      setData(documents);
    }
  }, [documents]);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return (
    <div>
      {error && <div>{error}</div>}
      {currentPageData.map((item) => (
        <div key={item.itemId}>
          <img src={item.imgUrl} className="item-img" alt={item.perfumeName} />
          <span className="item-name">{item.perfumeName}</span>
          <span className="item-brand">{item.brand}</span>
          <span className="item-price">{item.price}</span>
        </div>
      ))}
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
};

export default Items;
