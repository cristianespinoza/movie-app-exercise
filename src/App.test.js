import React from "react";
import { render, test, expect } from "@testing-library/react";
import App from "./App";

test("renders title", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Movie List/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders loader", () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/loader/i);
  expect(linkElement).toBeInTheDocument();
});
