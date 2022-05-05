import * as React from "react";
import { fetchJSON } from "./fetchJSON.jsx";
import { postJSON } from "./postJSON.jsx";
import { deleteJSON } from "./deleteJSON";

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

  async deleteArticle(title) {
    await deleteJSON("/api/articles/delete", title);
  },

  async registerLogout() {
    const response = await fetch("/api/login/logout", { method: "DELETE" });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}: ${response.statusText}`);
    }
  },
});
