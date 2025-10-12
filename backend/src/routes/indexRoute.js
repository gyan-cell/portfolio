import express from "express";
import { indexRoute } from "../controllers/indexController.js";

const router = express.Router();

router.route("/index").get(indexRoute);
