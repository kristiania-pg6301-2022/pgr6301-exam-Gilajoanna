import * as ReactDOM from "react-dom";
import * as React from "react";
import { WriteNewArticle } from "../writeNewArticle";
import { act, Simulate } from "react-dom/test-utils";
import { AppContext } from "../globals/AppContext";

describe("Write new article", () => {
  it("shows new article form", async () => {
    const element = document.createElement("div");
    await act(async () => ReactDOM.render(<WriteNewArticle />, element));
    expect(element.innerHTML).toMatchSnapshot();
    expect(
      Array.from(element.querySelectorAll("form label")).map((e) => e.innerHTML)
    ).toEqual(["Title:", "Category:", "Content:", "Author:"]);
  });

  it("Post article on submit", async () => {
    const postArticle = jest.fn();
    const element = document.createElement("div");
    await act(async () =>
      ReactDOM.render(
        <AppContext.Provider value={{ postArticle: postArticle }}>
          {" "}
          <WriteNewArticle />{" "}
        </AppContext.Provider>,
        element
      )
    );
    Simulate.change(element.querySelector("form input:nth-of-type(1)"), {
      target: { value: "Test article" },
    });
    Simulate.change(element.querySelector("form div:nth-of-type(2) input"), {
      target: { value: "Test category" },
    });
    Simulate.change(element.querySelector("form div:nth-of-type(3) input"), {
      target: { value: "Test content" },
    });
    Simulate.change(element.querySelector("form div:nth-of-type(4) input"), {
      target: { value: "Test author" },
    });
    await act(async () => Simulate.submit(element.querySelector("form")));
    expect(postArticle).toBeCalledWith({
      title: "Test article",
      category: "Test category",
      content: "Test content",
      author: "Test author",
    });
  });
});
