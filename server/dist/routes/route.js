import express from "express";
import cookieParser from "cookie-parser";
import { corsMid } from "../middleware/middleware.js";
import authRouter from "./all/auth.js";
import profileRouter from "./all/profile.js";
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cookieParser());
router.use(corsMid());
router.use("/auth", authRouter);
router.use("/profile", profileRouter);
export default router;
