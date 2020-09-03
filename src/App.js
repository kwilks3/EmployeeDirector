import React, { useState, useEffect } from "react";
import Title from "./components/Title";
import { employeeService } from "./utils/api";

import EmployeeTable from "./components/EmployeeTable";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [employeeArray, SetEmployeeArray] = useState([]);
  useEffect(() => {
    employeeService
      .apiCall()
      .then((res) => SetEmployeeArray(res.data.results))
      .catch((error) => console.log(error.response));
  }, []);

  return (
    <>
      <Title />
      <EmployeeTable employee={employeeArray} />
    </>
  );
}

export default App;
