import request from "supertest";
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { ArticlesApi } from "../articlesApi.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());

const mongoClient = new MongoClient(process.env.MONGODB_URL);

beforeAll(async () => {
  await mongoClient.connect();
  const database = mongoClient.db("test_database");
  await database.collection("articles");
  app.use("/api/articles", ArticlesApi(database));
});

afterAll(() => {
  mongoClient.close();
});

describe("Test article api", function () {
  it("List articles in database", async () => {
    expect(
      (await request(app).get("/api/articles").expect(200)).body.map(
        ({ title }) => title
      )
    ).toContain("Test article");
  });

  it("Post new article", async () => {
    const article = {
      title: "Article",
    };
    expect(await request(app).post("/api/articles").send(article).expect(200));
  });
});
