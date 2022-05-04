import * as ReactDOM from "react-dom";
import * as React from "react";
import { ListArticles } from "../articles.jsx";

describe("List articles component", () => {
  it("renders ListArticle", () => {
    const element = document.createElement("div");
    ReactDOM.render(<ListArticles />, element);
    expect(element.innerHTML).toMatchSnapshot();
  });
});
