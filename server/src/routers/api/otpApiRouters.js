import express from "express";
import { sendOTPEmail, verifyOTPEmail } from "../../controller/api/otpController.js";
import otpValidation from "../../validators/otpValidator.js";
const router = express.Router()

router.post("/send", otpValidation, sendOTPEmail)
router.post("/verify", otpValidation,   verifyOTPEmail)

export default router
