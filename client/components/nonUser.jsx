import { fetchJSON } from "../globals/fetchJSON";
import { AsideArticleList } from "./articles";
import * as React from "react";

export function NonUser() {
  async function listAllArticles() {
    return await fetchJSON("/api/articles");
  }

  return (
    <article>
      <AsideArticleList listAllArticles={listAllArticles} />
    </article>
  );
}
