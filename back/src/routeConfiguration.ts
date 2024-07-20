import { Router } from "express";

const configureRoute = (): Router => {
  const router = Router();

  router.get("hello", (request, response) => {
    console.debug("Healthcheck route hit");
    response.status(200).send("I'm alive");
  });

  console.info("Routes configured");
  return router;
};

export default configureRoute;
