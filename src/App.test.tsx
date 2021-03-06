import { render, screen } from "@testing-library/react";
import React from "react";

import App from "./App";

describe("Sample Test", () => {
  it("Heading must have text `hello world`", () => {
    render(<App />);
    const doc = screen.getByText("hello world");
    expect(doc).toBeInTheDocument();
  });
});
