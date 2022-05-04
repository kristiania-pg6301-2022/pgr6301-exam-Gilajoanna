import * as React from "react";
import { fetchJSON } from "./fetchJSON.jsx";
import { postJSON } from "./postJSON.jsx";

export const LoginContext = React.createContext({
  async fetchLogin() {
    return await fetchJSON("/api/login");
  },

  async createMovie(movie) {
    await postJSON("/api/movies", movie);
  },

  async registerLogin(login) {
    return await postJSON("/api/login", login);
  },

  async logout() {
    const res = await fetch("/api/login/logout", { method: "DELETE" });
    if (!res.ok) {
      throw new Error(`Failed to post ${res.status}: ${res.statusText}`);
    }
  },
});
