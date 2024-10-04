import express from "express";
import authController from "../Controller/AuthController.js";
import dotenv from "dotenv";

dotenv.config();

// Initialize express router
const router = express.Router()

router.post("/signup", authController.signup);
router.post("/login", authController.login);

export default router;
