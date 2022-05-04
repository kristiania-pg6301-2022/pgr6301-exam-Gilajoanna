import { Route, Routes } from "react-router-dom";

export function ListArticles() {
  return (
    <div>
      <h1>List of articles</h1>
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
  return (
    <Routes>
      <Route path={""} element={<ListArticles />} />
      <Route path={"new"} element={<AddNewArticle />} />
    </Routes>
  );
}
