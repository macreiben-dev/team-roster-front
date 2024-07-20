import express, { Request, Response } from "express";
import dotenv from "dotenv";
import configureRoute from "./routes";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use("/api/v1", configureRoute);

app
  .listen(PORT, () => {
    console.info("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });
