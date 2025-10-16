import express from "express";
import rateLimiter from "./services/RateLimiter.js";
import { indexRoute } from "./controllers/indexController.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(rateLimiter);
app.use("/api/v1", indexRoute);

export default app;
