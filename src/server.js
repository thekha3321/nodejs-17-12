/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from "express";
import { CONNECT_DB, GET_DB } from "./config/mongodb";
import exitHook from "async-exit-hook";
import { env } from "./config/environment";

const START_SERVER = () => {
  const app = express();

  app.get("/", async (req, res) => {
    console.log(await GET_DB().listCollections().toArray());

    res.end("<h1>Hello World!</h1><hr>");
  });

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(
      `3. Hello ${env.AUTHOR}, I am running at http://${env.APP_HOST}:${env.APP_PORT}/`
    );
  });
};

(async () => {
  try {
    console.log("1. Connecting to MongoDB");
    await CONNECT_DB();
    console.log("2. Connecting to MongoDB");
    START_SERVER();
  } catch (error) {
    console.log("Failed to connect to MongoDB");
    process.exit(0);
  }
})();
