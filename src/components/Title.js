import React from "react";
import { Navbar } from "react-bootstrap";
import "./Title.css";
export default function Title() {
  return (
    <Navbar className="header" data-testid="Title" expand="lg">
      <Navbar.Brand
        style={{
          color: "white",
          fontSize: "30px",
          width: "30%",
          marginLeft: "45%",
        }}
      >
        Employee Directory
      </Navbar.Brand>
    </Navbar>
  );
}
