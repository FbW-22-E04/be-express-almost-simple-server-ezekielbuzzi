import express from "express";

import {
  getTime,
  random,
  isNumber,
} from "../controllers/questsionControllers.js";

const router = express.Router();

router.get("/time", getTime);
router.get("/random", random);
router.get("/isNumber/:character", isNumber);

export default router;
