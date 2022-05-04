import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useLoader } from "./globals/useLoader";
import { fetchJSON } from "./globals/fetchJSON";
import { useContext, useState } from "react";
import { AppContext } from "./globals/AppContext";

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

function FormInput({ label, value, onChangeValue }) {
  return (
    <div>
      <label>{label}</label>{" "}
      <input
        type={"text"}
        name={"title"}
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </div>
  );
}

export function AddNewArticle() {
  //const navigate = useNavigate();
  const { createArticle } = useContext(AppContext);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await createArticle({ title, category, author, content });

    setTitle("");
    setCategory("");
    setAuthor("");
    setContent("");

    //navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Write new article</h1>

      <FormInput label={"Title:"} value={title} onChangeValue={setTitle} />
      <FormInput
        label={"Category:"}
        value={category}
        onChangeValue={setCategory}
      />
      <FormInput
        label={"Content:"}
        value={content}
        onChangeValue={setContent}
      />
      <FormInput label={"Author:"} value={author} onChangeValue={setAuthor} />
      <button type={"submit"}>Publish</button>
    </form>
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
