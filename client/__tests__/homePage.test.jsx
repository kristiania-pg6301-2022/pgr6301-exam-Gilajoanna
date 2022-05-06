import * as ReactDOM from "react-dom";
import * as React from "react";
import { HomePage } from "../components/homePage";

describe("Home page component", () => {
  it("renders HomePage", () => {
    const element = document.createElement("div");
    ReactDOM.render(<HomePage />, element);
    expect(element.innerHTML).toMatchSnapshot();
  });
});
