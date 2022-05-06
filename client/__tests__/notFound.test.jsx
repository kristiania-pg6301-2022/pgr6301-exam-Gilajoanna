import * as ReactDOM from "react-dom";
import * as React from "react";
import { NotFound } from "../components/notFound";

describe("Not found component", () => {
  it("renders NotFound", () => {
    const element = document.createElement("div");
    ReactDOM.render(<NotFound />, element);
    expect(element.innerHTML).toMatchSnapshot();
  });
});
