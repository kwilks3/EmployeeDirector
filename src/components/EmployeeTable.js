import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

export default function EmployeeTable(props) {
  const columns = [
    {
      dataField: "id",
      hidden: "true",
    },
    {
      dataField: "title",
      text: "Title",
    },
    {
      dataField: "firstName",
      text: "First Name",
    },
    {
      dataField: "lastName",
      text: "Last Name",
    },
    {
      dataField: "email",
      text: "Email",
    },
    {
      dataField: "city",
      text: "City",
    },
    {
      dataField: "state",
      text: "State",
    },
  ];
  let data = [];
  props.employee.map((employee, i) => {
    data.push({
      id: i,
      title: employee.name.title,
      firstName: employee.name.first,
      lastName: employee.name.last,
      email: employee.email,
      city: employee.location.city,
      state: employee.location.state,
    });
  });
  return (
    <BootstrapTable
      keyField="id"
      data={data}
      columns={columns}
      striped
      hover
      condensed
    />
  );
}
