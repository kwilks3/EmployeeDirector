import React from "react";
import { Navbar } from "react-bootstrap";
export default function Title() {
  return (
    <Navbar data-testid="Title" bg="dark" expand="lg">
      <Navbar.Brand
        style={{
          fontSize: "30px",
          color: "white",
        }}
      >
        Employee Directory
      </Navbar.Brand>
    </Navbar>
  );
}
