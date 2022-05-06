import * as ReactDOM from "react-dom";
import * as React from "react";
import { NonUser } from "../components/nonUser";

describe("Non user component", () => {
  it("renders Non user", () => {
    const element = document.createElement("div");
    ReactDOM.render(<NonUser />, element);
    expect(element.innerHTML).toMatchSnapshot();
  });
});
