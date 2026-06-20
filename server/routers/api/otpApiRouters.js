import express from "express";
import { sendOTPEmail, verifyOTPEmail } from "../../controller/api/otpController.js";
const router = express.Router()

router.post("/send", sendOTPEmail)
router.post("/verify", verifyOTPEmail)

export default router
