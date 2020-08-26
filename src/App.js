import React, { useState } from "react";
import Title from "./components/Title";
import axios from "axios";

import EmployeeTable from "./components/EmployeeTable";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [employeeArray, SetEmployeeArray] = useState([]);
  if (employeeArray.length === 0) {
    axios
      .get("https://randomuser.me/api/?results=200&nat=us")
      .then((res) => SetEmployeeArray(res.data.results));
    console.log(employeeArray);
  }
  return (
    <>
      <Title />
      <EmployeeTable employee={employeeArray} />
    </>
  );
}
export default App;
