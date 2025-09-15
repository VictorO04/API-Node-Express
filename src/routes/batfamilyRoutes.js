import express from "express";
import {batfamilyGetAll} from "../controllers/batfamilyController.js";
import {batfamilyGetById} from "../controllers/batfamilyController.js";

const router = express.Router();

router.get("/", batfamilyGetAll);
router.get("/:id", batfamilyGetById);

export default router;