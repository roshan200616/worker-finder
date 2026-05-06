import { body } from "express-validator";

const workerValidation = [
  body('name')
    .trim()
    .notEmpty().withMessage("Name is required")
    .isLength({ min: 3 }).withMessage("Name must be at least 3 letters"),

  body('mobileNo')
    .trim()
    .notEmpty().withMessage("Mobile number is required")
    .matches(/^[6-9]\d{9}$/).withMessage("Invalid mobile number"),

  body('email')
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email")
    .normalizeEmail(),

  body('password')
    .notEmpty().withMessage("Password is required")
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),

  body('area')
    .trim()
    .notEmpty().withMessage("Area is required")
    .isLength({ min: 3 }).withMessage("Area must be at least 3 letters"),

  body('city')
    .trim()
    .notEmpty().withMessage("City is required") 
    .isLength({ min: 3 }).withMessage("City must be at least 3 letters"),

  body('state')
    .trim()
    .notEmpty().withMessage("State is required") 
    .isLength({ min: 3 }).withMessage("State must be at least 3 letters"),

  body('pin')
    .notEmpty().withMessage('PIN code is required')
    .matches(/^[1-9][0-9]{5}$/).withMessage('Invalid PIN code'),

  body('work')
    .trim()
    .notEmpty().withMessage('Work is required')
    .isLength({ min: 2 }).withMessage('Work must be at least 2 characters'),

  body('latitude')
    .notEmpty().withMessage('Latitude is required')
    .isFloat({ min: -90, max: 90 }).withMessage('Invalid latitude'),

  body('longitude')
    .notEmpty().withMessage('Longitude is required')
    .isFloat({ min: -180, max: 180 }).withMessage('Invalid longitude'),
];

export default workerValidation;