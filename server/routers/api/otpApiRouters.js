import express from "express";
import { sendOTPEmail, verifyOTPEmail } from "../../controller/api/otpController.js";
const router = express.Router()

router.post("/send-otp", sendOTPEmail)
router.post("/verify-otp", verifyOTPEmail)

export default router
