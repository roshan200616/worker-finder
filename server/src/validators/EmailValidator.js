import {body} from "express-validator";
const emailValidation = [
    body('email')
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email")
    .normalizeEmail(),
]
export default emailValidation;