import React from "react";
import Title from "./components/Title";
import Search from "./components/Search";

import EmployeeTable from "./components/EmployeeTable";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Title />
      <Search />
      <EmployeeTable />
    </>
  );
}

export default App;
