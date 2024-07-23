import { Router } from "express";
import configureUserRoutes from "./routes/ConfigureUserRoutes";

const router = Router();

const configureRoute = (router: Router): Router => {
  router.get("/hello", (request, response) => {
    console.debug("Healthcheck route hit");
    response.status(200).send("I'm alive");
  });

  configureUserRoutes(router);

  console.info("Routes configured");

  return router;
};

configureRoute(router);

router.stack.forEach((r: any) => {
  if (r.route && r.route.path) {
    console.info(`Route ${r.route.path} is up and running`);
  }
});

export default router;
