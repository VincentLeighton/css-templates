import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /A simple app to switch beween several layouts. The layouts will be designed using CSS/i
  );
  expect(linkElement).toBeInTheDocument();
});
