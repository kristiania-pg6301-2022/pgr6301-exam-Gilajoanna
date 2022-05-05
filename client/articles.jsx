import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { useLoader } from "./globals/useLoader";
import { fetchJSON } from "./globals/fetchJSON";
import { WriteNewArticle } from "./writeNewArticle";

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

export function ListArticles({ listAllArticles, user }) {
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
        <ArticleItem key={article.title} article={article} user={user} />
      ))}
    </div>
  );
}

export function AsideArticleItem({ article: { title } }) {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export function AsideArticleList({ listAllArticles }) {
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
        <AsideArticleItem key={article.title} article={article} />
      ))}
    </div>
  );
}

function UpdateArticle() {
  return <h2>Update article</h2>;
}

export function Articles({ user }) {
  if (!user) {
    return <div>Please log in to be authorized to this page.</div>;
  }
  async function listAllArticles() {
    return await fetchJSON("/api/articles");
  }
  return (
    <Routes>
      <Route
        path={""}
        element={<ListArticles listAllArticles={listAllArticles} user={user} />}
      />
      <Route path={"new"} element={<WriteNewArticle />} />
      <Route path={"update"} element={<UpdateArticle />} />
    </Routes>
  );
}
