import * as ReactDOM from "react-dom";
import * as React from "react";
import { WriteNewArticle } from "../writeNewArticle";
import { act } from "react-dom/test-utils";

describe("write new article", () => {
  it("shows new article form", async () => {
    const element = document.createElement("div");
    await act(async () => ReactDOM.render(<WriteNewArticle />, element));
    expect(element.innerHTML).toMatchSnapshot();
    expect(
      Array.from(element.querySelectorAll("form label")).map((e) => e.innerHTML)
    ).toEqual(["Title:", "Category:", "Content:", "Author:"]);
  });
});
