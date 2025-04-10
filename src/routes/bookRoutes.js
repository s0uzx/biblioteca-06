import express from "express";
import bookController from "../controllers/bookController.js";
const router = express.Router();
router.get("/", bookController.getAll);
router.get("/:id", bookController.getAll);
router.post("/", bookController.create);
router.put("/:id", bookController.update);
router.delete("/:id", bookController.delete);
export default router;
