import { Router } from "express";
import {
  checkAuth,
  logout,
  signin,
  singup,
  updateProfile,
} from "../controllers/auth.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/signup", singup);

router.post("/signin", signin);

router.post("/logout", isAuthenticated, logout);

router.put("/update-profile", isAuthenticated, updateProfile);

router.get("/check", isAuthenticated, checkAuth);

export default router;
