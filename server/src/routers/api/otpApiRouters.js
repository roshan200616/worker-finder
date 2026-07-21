import express from "express";
import { sendOTPEmail, verifyOTPEmail } from "../../controller/api/otpController.js";
import emailValidation from "../../validators/EmailValidator.js";
const router = express.Router()

router.post("/send", emailValidation, sendOTPEmail)
router.post("/verify",verifyOTPEmail)

export default router
