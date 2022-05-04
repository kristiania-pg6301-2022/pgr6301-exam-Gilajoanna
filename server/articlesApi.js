import { Router } from "express";

export function ArticlesApi(database) {
  const apiRouter = new Router();

  apiRouter.get("/", async (req, res) => {
    const articles = await database
      .collection("articles")
      .find()
      .map(({ title, category, content, author }) => ({
        title,
        category,
        content,
        author,
      }))
      .toArray();
    res.json(articles);
  });

  return apiRouter;
}
