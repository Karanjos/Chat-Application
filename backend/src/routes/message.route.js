import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import {
  getMessages,
  getUsers,
  sendMessage,
} from "../controllers/message.controller.js";

const router = Router();

router.get("/users", isAuthenticated, getUsers);
router.get("/:id", isAuthenticated, getMessages);
router.post("/send", isAuthenticated, sendMessage);

export default router;
