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

  apiRouter.post("/", async (req, res) => {
    const { title, category, content, author } = req.body;
    await database.collection("articles").insertOne({
      title,
      categories: [category],
      content,
      author,
    });
    res.sendStatus(200);
  });

  return apiRouter;
}
