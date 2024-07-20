import express, { Request, Response } from "express";
import dotenv from "dotenv";
import configureRoute from "./routes";

const session = require("express-session");
const cors = require("cors");

dotenv.config();
const app = express();

const PORT = process.env.SERVER_PORT;

app.use("/api/v1", configureRoute);

app.use(
  session({
    secret: "1234567890", // don't use this secret in prod :)
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: "auto",
      httpOnly: true,
      maxAge: 3600000,
    },
  })
);
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app
  .listen(PORT, () => {
    console.info("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });
