import * as React from "react";
import { useContext, useState } from "react";
import { AppContext } from "./globals/AppContext";

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
