import * as React from "react";
import { useContext, useState } from "react";
import { AppContext } from "../globals/AppContext";

function ArticleForm({ label, value, onChangeValue }) {
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

export function WriteNewArticle() {
  const { postArticle } = useContext(AppContext);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title || !category || !author || !content) {
      alert("One or more inputs are empty. Please try again.");
    }

    await postArticle({ title, category, author, content });

    setTitle("");
    setCategory("");
    setAuthor("");
    setContent("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Write new article</h1>

        <ArticleForm label={"Title:"} value={title} onChangeValue={setTitle} />
        <ArticleForm
          label={"Category:"}
          value={category}
          onChangeValue={setCategory}
        />
        <ArticleForm
          label={"Content:"}
          value={content}
          onChangeValue={setContent}
        />
        <ArticleForm
          label={"Author:"}
          value={author}
          onChangeValue={setAuthor}
        />
        <button type={"submit"}>Publish</button>
      </form>
    </div>
  );
}
