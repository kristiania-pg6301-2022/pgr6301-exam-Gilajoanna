import express from "express";
import path from "path";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { ArticlesApi } from "./articlesApi.js";

dotenv.config();
const app = express();

/******** MONGODB ********/
const mongoClient = new MongoClient(process.env.MONGODB_URL);
mongoClient.connect().then(() => {
  console.log("Connected to mongoDB");

  app.use("/api/articles", ArticlesApi(mongoClient.db("article_database")));
});

app.use(express.static("../client/dist/"));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    return res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on http://localhost:${server.address().port}`);
});
