import { fetchJSON } from "../globals/fetchJSON";
import { ListArticles } from "./articles";
import * as React from "react";

export function HomePage({ user }) {
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
