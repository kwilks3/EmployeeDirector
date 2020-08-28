import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import "./EmployeeTable.css";
import paginationFactory from "react-bootstrap-table2-paginator";
export default function EmployeeTable(props) {
  const { SearchBar, ClearSearchButton } = Search;
  const { ExportCSVButton } = CSVExport;

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
      headerStyle: (colum, colIndex) => {
        return { width: "300px" };
      },
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
    <ToolkitProvider
      data-testid="EmployeeTable"
      keyField="id"
      data={data}
      columns={columns}
      search
      exportCSV={{
        fileName: "employeeData.csv",
        separator: ",",
        ignoreHeader: true,
        noAutoBOM: false,
      }}
    >
      {(props) => (
        <Container style={{ marginTop: "5%" }}>
          <h3 className="searchText">Search by any field:</h3>
          <SearchBar {...props.searchProps} placeholder="Search" />
          <Button
            variant="outline-secondary"
            size="sm"
            style={{
              borderColor: "#55897b",
            }}
          >
            <ClearSearchButton {...props.searchProps} />
          </Button>
          <Button
            variant="outline-secondary"
            size="sm"
            style={{
              borderColor: "#55897b",
            }}
          >
            <ExportCSVButton {...props.csvProps}>
              Export a CSV file
            </ExportCSVButton>
          </Button>
          <hr />
          <BootstrapTable
            {...props.baseProps}
            hover
            condensed
            pagination={paginationFactory()}
          />
        </Container>
      )}
    </ToolkitProvider>
  );
}
