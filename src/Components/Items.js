import React, { useState, useEffect, useRef } from "react";
import { useCollection } from "../hooks/useCollection";
import ReactPaginate from "react-paginate";

import "./Items.css";

const Items = () => {
  const { documents, error } = useCollection("items");
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  //   const [currentPageData, setCurrentPageData] = useState([]);

  let pageCount = useRef({});
  let currentPageData = useRef({});
  useEffect(() => {
    if (documents) {
      setData(documents);
      console.log(data);
    }
  }, []);
  const PER_PAGE = 2;
  const offset = currentPage * PER_PAGE;
  currentPageData = data.slice(offset, offset + PER_PAGE);
  pageCount = Math.ceil(data.length / PER_PAGE);
  // setCurrentPageData(currentPageData);

  console.log(currentPageData);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  //   let totalPages;
  //   let currentItems;
  //   if (documents) {
  //     totalPages = Math.ceil(documents.length / 2);
  //     console.log(totalPages);
  //     currentItems = documents.slice();
  //     console.log(currentItems);
  //   }

  const items = documents;

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <h3>Item #{item}</h3>
            </div>
          ))}
      </>
    );
  }

  return (
    <div>
      {error && <div>{error}</div>}
      {currentPageData.map((item) => (
        <div key={item.itemId}>
          <img src={item.imgUrl} className="item-img" />
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
