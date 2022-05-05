import * as React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Articles, ListArticles } from "./articles";

import "./style.css";
import { useContext } from "react";
import { useLoader } from "./globals/useLoader";
import { LoginPage } from "./login";
import { AppContext } from "./globals/AppContext";
import { fetchJSON } from "./globals/fetchJSON";

function UserNavigation({ user }) {
  if (!user || Object.keys(user).length === 0) {
    return (
      <div>
        <Link to={"/login"}>Login</Link>
        <div>
          <Link to={"/"}>Home page</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Link to={"/"}>Articles</Link>
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

  return (
    <>
      {user && (
        <div>
          <div>
            <Link to={"/articles/new"}>Write a new article</Link>
          </div>
          <article>
            <ListArticles listAllArticles={listAllArticles} />
          </article>
        </div>
      )}
    </>
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

function UserProfile({ user }) {
  const { loading, error } = useLoader(async () => {
    return await fetchJSON("/api/login");
  });

  if (loading) {
    return <div>Loading..</div>;
  }

  if (error) {
    return <div>Error! {error.toString()}</div>;
  }

  return (
    <div>
      <h1>
        Profile for {user.name} ({user.email}){" "}
      </h1>
      <div>
        <img src={user.picture} alt={"Profile image"} />
      </div>
    </div>
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
        <h2>Non users</h2>
      </aside>
      <nav>
        <UserNavigation user={data?.user} />
      </nav>
      <main>
        <Routes>
          <Route path={"/"} element={<HomePage user={data?.user} />} />
          <Route path={"/articles/*"} element={<Articles />} />
          <Route
            path={"/login/*"}
            element={<LoginPage config={data.config} reload={reload} />}
          />
          <Route
            path={"/profile"}
            element={<UserProfile user={data?.user} />}
          />
          <Route path={"/*"} element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
