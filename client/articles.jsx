import { Link, Route, Routes } from "react-router-dom";
import { useLoader } from "./useLoader";
import { fetchJSON } from "./fetchJSON";

export function ListArticles({ listAllArticles }) {
  const { loading, data, error } = useLoader(listAllArticles);

  if (loading) {
    return <div>Please wait..</div>;
  }

  if (error) {
    return (
      <div>
        <h1>An error occurred</h1>
        <div id="error-text">
          Something went wrong. Please <Link to={"/articles"}>try again</Link>
        </div>
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

export function AddNewArticle() {
  return (
    <div>
      <h1>Add a new Article</h1>
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
