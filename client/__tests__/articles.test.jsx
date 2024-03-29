import * as ReactDOM from "react-dom";
import * as React from "react";
import { AsideArticleList, ListArticles } from "../components/articles.jsx";
import { act } from "react-dom/test-utils";
import { HomePage } from "../components/homePage";

describe("List articles component", () => {
  it("renders ListArticle", () => {
    const element = document.createElement("div");
    ReactDOM.render(<ListArticles />, element);
    expect(element.innerHTML).toMatchSnapshot();
  });

  it("renders article card", () => {
    const element = document.createElement("div");
    ReactDOM.render(<HomePage />, element);
    expect(element.innerHTML).toMatchSnapshot();
  });

  it("shows list of articles", async () => {
    const article = [{ title: "Article" }];
    const element = document.createElement("div");
    await act(async () => {
      ReactDOM.render(
        <ListArticles listAllArticles={() => article} />,
        element
      );
    });

    expect(
      Array.from(element.querySelectorAll("h2")).map((e) => e.innerHTML)
    ).toEqual(["Article"]);

    expect(element.innerHTML).toMatchSnapshot();
  });

  it("shows error in article list", async () => {
    const element = document.createElement("div");
    await act(async () => {
      ReactDOM.render(
        <ListArticles
          listAllArticles={() => {
            throw new Error("Something went wrong. Please try again.");
          }}
        />,
        element
      );
    });
    expect(element.querySelector("#error-message").innerHTML).toEqual(
      "Something went wrong. Please try again."
    );
    expect(element.innerHTML).toMatchSnapshot();
  });

  it("shows error in aside article list", async () => {
    const element = document.createElement("div");
    await act(async () => {
      ReactDOM.render(
        <AsideArticleList
          listAllArticles={() => {
            throw new Error("Something went wrong. Please try again.");
          }}
        />,
        element
      );
    });
    expect(element.querySelector("#error-message").innerHTML).toEqual(
      "Something went wrong. Please try again."
    );
    expect(element.innerHTML).toMatchSnapshot();
  });
});
