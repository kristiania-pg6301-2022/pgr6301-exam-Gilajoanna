import * as React from "react";
import { useContext } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./style.css";
import { useLoader } from "./globals/useLoader";
import { LoginPage } from "./login";
import { AppContext } from "./globals/AppContext";
import { fetchJSON } from "./globals/fetchJSON";
import { UserProfile } from "./components/userProfile";
import { NotFound } from "./components/notFound";
import { Articles, AsideArticleList, ListArticles } from "./articles";

function UserNavigation({ user }) {
  if (!user || Object.keys(user).length === 0) {
    return (
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to={"/"}>Articles</Link>
      <Link to={"/articles/new"}>Write new article</Link>
      <Link to={"/profile"}>
        {user.name ? `Profile for ${user.name}` : "Profile"}
      </Link>
      <Link to={"/login/logout"}>Log out</Link>
    </div>
  );
}

function HomePage({ user }) {
  async function listAllArticles() {
    return await fetchJSON("/api/articles");
  }

  if (!user) {
    return <div>Please log in to have full access to articles.</div>;
  }

  return (
    <>
      <div>
        <article>
          <ListArticles listAllArticles={listAllArticles} />
        </article>
      </div>
    </>
  );
}

function NonUser() {
  async function listAllArticles() {
    return await fetchJSON("/api/articles");
  }
  return (
    <article>
      <AsideArticleList listAllArticles={listAllArticles} />
    </article>
  );
}

export function Application() {
  const { fetchLogin } = useContext(AppContext);
  const { loading, error, data, reload } = useLoader(fetchLogin);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.toString()}</div>;
  }
  return (
    <BrowserRouter>
      <header>
        <h1>Express Yourself</h1>
      </header>
      <aside>
        <NonUser />
      </aside>
      <nav>
        <UserNavigation user={data.user} />
      </nav>
      <main>
        <Routes>
          <Route path={"/"} element={<HomePage user={data.user} />} />
          <Route path={"/articles/*"} element={<Articles user={data.user} />} />
          <Route
            path={"/login/*"}
            element={<LoginPage config={data.config} reload={reload} />}
          />
          <Route path={"/profile"} element={<UserProfile user={data.user} />} />
          <Route path={"/*"} element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
