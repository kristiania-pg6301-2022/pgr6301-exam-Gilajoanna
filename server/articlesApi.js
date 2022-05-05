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
      category,
      content,
      author,
    });
    res.sendStatus(200);
  });

  apiRouter.delete("/delete", async (req, res) => {
    const { title } = req.body;
    await database.collection("articles").deleteOne({ title });
    console.log("Article deleted");
    console.log(title);
    res.sendStatus(200);
  });

  return apiRouter;
}
