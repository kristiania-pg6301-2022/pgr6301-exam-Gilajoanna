import * as React from "react";
import { fetchJSON } from "./fetchJSON.jsx";
import { postJSON } from "./postJSON.jsx";

export const AppContext = React.createContext({
  async fetchLogin() {
    return await fetchJSON("/api/login");
  },

  async registerLogin(login) {
    return await postJSON("/api/login", login);
  },

  async postArticle(article) {
    await postJSON("/api/articles", article);
  },

  async logout() {
    const response = await fetch("/api/login/logout", { method: "DELETE" });
    if (!response.ok) {
      throw new Error(
        `Failed to post ${response.status}: ${response.statusText}`
      );
    }
  },
});
