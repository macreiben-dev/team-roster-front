import express, { Request, Response } from "express";
import dotenv from "dotenv";
import configureRoute from "./routeConfiguration";

// configures dotenv to work in your application
dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use("/api/v1", configureRoute());

app
  .listen(PORT, () => {
    app._router.stack.forEach((r: any) => {
      if (r.route && r.route.path) {
        console.info("Loaded route [routePath]", r.route.path);
      }
    });

    console.info("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });
