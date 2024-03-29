import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { useLoader } from "../globals/useLoader";
import { fetchJSON } from "../globals/fetchJSON";
import { WriteNewArticle } from "./writeNewArticle";
import { AppContext } from "../globals/AppContext";
import { useContext } from "react";

export function ArticleItem({
  article: { title, category, content, author },
  reload,
}) {
  const { deleteArticle } = useContext(AppContext);

  async function handleSubmit(e) {
    e.preventDefault();
    await deleteArticle({ title });
    reload();
  }
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <strong>{category}</strong>
      </div>
      <div>
        Writer: <i>{author}</i>
      </div>
      <div>{content}</div>
      <button type={"submit"} onClick={handleSubmit}>
        Delete Article
      </button>
    </div>
  );
}

export function ListArticles({ listAllArticles }) {
  const { loading, data, error, reload } = useLoader(listAllArticles);

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
      {data.map((article) => (
        <ArticleItem key={article.title} article={article} reload={reload} />
      ))}
    </div>
  );
}

export function AsideArticleItem({ article: { title } }) {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
}

export function AsideArticleList({ listAllArticles }) {
  const { loading, data, error, reload } = useLoader(listAllArticles);

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
      <h2>Latest news articles</h2>

      {data.map((article) => (
        <AsideArticleItem
          key={article.title}
          article={article}
          reload={reload}
        />
      ))}
    </div>
  );
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
        element={<ListArticles listAllArticles={listAllArticles} />}
      />
      <Route path={"new"} element={<WriteNewArticle />} />
    </Routes>
  );
}
