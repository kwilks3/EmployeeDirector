import React from "react";
import ReactDOM from "react-dom";
import Title from "./Title";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

it("renders title without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Title></Title>, div);
});

it("renders title correctly", () => {
  const { getByTestId } = render(<Title></Title>);
  expect(getByTestId("Title")).toHaveTextContent("Employee Directory");
});
