import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

export default function EmployeeTable(props) {
  const { SearchBar, ClearSearchButton } = Search;

  const columns = [
    {
      dataField: "id",
      hidden: "true",
    },
    {
      dataField: "title",
      text: "Title",
      sort: true,
    },
    {
      dataField: "firstName",
      text: "First Name",
      sort: true,
    },
    {
      dataField: "lastName",
      text: "Last Name",
      sort: true,
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
    },
    {
      dataField: "city",
      text: "City",
      sort: true,
    },
    {
      dataField: "state",
      text: "State",
      sort: true,
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
    <ToolkitProvider keyField="id" data={data} columns={columns} search>
      {(props) => (
        <div>
          <h3>Search through any field:</h3>
          <SearchBar {...props.searchProps} placeholder="Search" />
          <ClearSearchButton {...props.searchProps} />

          <hr />
          <BootstrapTable {...props.baseProps} striped hover condensed />
        </div>
      )}
    </ToolkitProvider>
  );
}
