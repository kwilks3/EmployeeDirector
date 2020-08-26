import React from "react";
import { Table } from "react-bootstrap";
import EmployeeItem from "./EmployeeItem";

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
            <EmployeeItem
              firstName={employee.name.first}
              lastName={employee.name.last}
              email={employee.email}
              city={employee.location.city}
              state={employee.location.state}
            />
          );
        })}
      </tbody>
    </Table>
  );
}
