import React, { useEffect, useState } from "react";
import { useCollection } from "../hooks/useCollection";

import "./Search.css";

const Search = () => {
  const { documents, error } = useCollection("items");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchItems, setSearchItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const filteredItems = searchItems.filter((item) =>
    item.perfumeName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  let typed = false;
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // console.log(itemsSearched);
  };
  if (searchQuery.length == 0) {
    typed = false;
  } else {
    typed = true;
  }
  useEffect(() => {
    if (documents) {
      setSearchItems(documents);
    }
  });

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleSearch} />
      {filteredItems.map((item) => (
        <div key={item.id} className={typed ? "shown" : "hidden"}>
          {item.perfumeName}
        </div>
      ))}
    </div>
  );
};

export default Search;
