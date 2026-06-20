import {body} from "express-validator";
const otpValidation = [
    body('email')
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email")
    .normalizeEmail(),
]
export default otpValidation;