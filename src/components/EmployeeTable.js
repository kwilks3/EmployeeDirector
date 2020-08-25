import React from "react";
import { Table } from "react-bootstrap";

export default function EmployeeTable() {
  const apiUrl = "https://randomuser.me/api/?results=200&nat=us";

  fetch(apiUrl).then((response) => response.results);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Home City</th>
          <th>Home State</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mr</td>
          <td>John</td>
          <td>Smith</td>
          <td>johnsmith@gmail.com</td>
          <td>Austin</td>
          <td>Texas</td>
        </tr>
      </tbody>
    </Table>
  );
}
