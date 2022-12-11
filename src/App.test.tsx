import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import App from "./App";
describe("Sample Test", () => {
  it("Heading must have text `hello world`", () => {
    const screen = render(<App />, {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={["/"]}>{children}</MemoryRouter>
      ),
    });

    screen.getByText("Hello");
  });
});
