import express from "express";
import rateLimiter from "./services/RateLimiter.js";
import { indexRoute } from "./controllers/indexController.js";

const app = express();
app.use(rateLimiter);
app.use("/api/v1", indexRoute);

export default app;
