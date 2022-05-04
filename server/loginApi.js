import express from "express";
import { fetchJSON } from "./fetchJSON.js";
import fetch from "node-fetch";

/******** CONFIGURATION ********/

async function configuration() {
  const discovery_endpoint =
    "https://accounts.google.com/.well-known/openid-configuration";
  const client_id = process.env.CLIENT_ID;
  const { userinfo_endpoint, authorization_endpoint } = await fetchJSON(
    discovery_endpoint
  );

  return {
    response_type: "token",
    authorization_endpoint,
    scope: "profile email",
    userinfo_endpoint,
    client_id,
  };
}

async function fetchUserInfo(access_token, config) {
  const userinfo = await fetch(config.userinfo_endpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (userinfo.ok) {
    return await userinfo.json();
  } else {
    console.log(
      `Failed to fetch user ${userinfo.status} ${userinfo.statusText}`
    );
    return undefined;
  }
}

export function LoginApi() {
  const router = new express.Router();

  router.get("/", async (req, res) => {
    const config = await configuration();
    const response = { config, user: {} };
    const { access_token } = req.signedCookies;

    response.user = await fetchUserInfo(access_token, config);
    res.json(response);
  });

  router.post("/", (req, res) => {
    const { access_token } = req.body;
    res.cookie("access_token", access_token, { signed: true });
    res.sendStatus(200);
  });

  router.delete("/logout", (req, res) => {
    res.clearCookie("access_token");
    res.sendStatus(200);
  });

  return router;
}
