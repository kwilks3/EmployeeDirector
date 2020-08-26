import React from "react";
import { Table } from "react-bootstrap";

export default function EmployeeTable(props) {
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
        {props.employee.map((employee) => {
          return (
            <tr>
              <td>{employee.name.title}</td>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.email}</td>
              <td>{employee.location.city}</td>
              <td>{employee.location.state}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
