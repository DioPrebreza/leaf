import React from "react";
import AddItem from "../Components/Admin/AddItem";
import Items from "../Components/Items";
import Search from "../Components/Search";

const Admin = () => {
  return (
    <div>
      <AddItem />
      <Items />
      <Search />
    </div>
  );
};

export default Admin;
