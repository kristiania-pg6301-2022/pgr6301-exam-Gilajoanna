import * as React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Articles } from "./articles";

function HomePage() {
  return (
    <div>
      <h1>Home page</h1>
      <div>
        <Link to={"/login"}>Login with Google</Link>
      </div>
      <div>
        <Link to={"/articles"}>List all articles</Link>
      </div>
      <div>
        <Link to={"/articles/new"}>Write a new article</Link>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}

function LoginCallback() {
  return (
    <div>
      <h1>Login Callback</h1>
    </div>
  );
}

export function LoginPage() {
  return (
    <Routes>
      <Route path={""} element={<Login />} />
      <Route path={"/callback"} element={<LoginCallback />} />
    </Routes>
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

function UserProfile() {
  return (
    <div>
      <h1>User Profile</h1>
    </div>
  );
}

export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/articles/*"} element={<Articles />} />
        <Route path={"/login/*"} element={<LoginPage />} />
        <Route path={"/profile"} element={<UserProfile />} />
        <Route path={"/*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
