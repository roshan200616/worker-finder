import express from "express";
import emailValidation from "../../validators/EmailValidator.js";
import { loginController } from "../../controller/auth/loginController.js";
const router = express.Router()

router.post('/',emailValidation,loginController)

export default router

