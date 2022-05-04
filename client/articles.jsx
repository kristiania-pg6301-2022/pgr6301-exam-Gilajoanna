import * as React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useLoader } from "./globals/useLoader";
import { fetchJSON } from "./globals/fetchJSON";
import { AddNewArticle } from "./addNewArticle";

function ArticleItem({ article: { title, category, content, author } }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <strong>{category}</strong>
      </div>
      <div>
        Author: <i>{author}</i>
      </div>
      <div>{content}</div>
    </div>
  );
}

export function ListArticles({ listAllArticles }) {
  const { loading, data, error } = useLoader(listAllArticles);

  if (loading) {
    return <div>Please wait..</div>;
  }

  if (error) {
    return (
      <div>
        <h1>An error occurred</h1>
        <div id="error-message">Something went wrong. Please try again.</div>
      </div>
    );
  }

  return (
    <div>
      <h1>List of articles</h1>

      {data.map((article) => (
        <ArticleItem key={article.title} article={article} />
      ))}
    </div>
  );
}

export function Articles() {
  async function listAllArticles() {
    return await fetchJSON("/api/articles");
  }

  return (
    <Routes>
      <Route
        path={""}
        element={<ListArticles listAllArticles={listAllArticles} />}
      />
      <Route path={"new"} element={<AddNewArticle />} />
    </Routes>
  );
}
