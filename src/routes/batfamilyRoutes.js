import express from "express";
import {batfamilyGetAll} from "../controllers/batfamilyController.js";
import {batfamilyGetById} from "../controllers/batfamilyController.js";
import {createMember} from "../controllers/batfamilyController.js";
import {deleteMember} from "../controllers/batfamilyController.js";

const router = express.Router();

router.get("/", batfamilyGetAll);
router.get("/:id", batfamilyGetById);
router.post("/", createMember);
router.delete("/:id", deleteMember);

export default router;