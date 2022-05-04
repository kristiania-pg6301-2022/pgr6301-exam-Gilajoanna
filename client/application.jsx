import * as React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Articles } from "./articles";

function HomePage() {
  return (
    <div>
      <h1>Home page</h1>
      <div>
        <Link to={"/articles"}>List all articles</Link>
      </div>
      <div>
        <Link to={"/articles/new"}>Write a new article</Link>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <div>
        <Link to={"/"}>Back to home page</Link>
      </div>
    </div>
  );
}

export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/articles/*"} element={<Articles />} />
        <Route path={"/*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
