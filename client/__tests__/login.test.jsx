import * as ReactDOM from "react-dom";
import * as React from "react";
import { LoginPage } from "../components/login";
import { MemoryRouter } from "react-router-dom";

describe("Login", () => {
  it("renders LoginPage", () => {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
      element
    );
    expect(element.innerHTML).toMatchSnapshot();
  });
});
