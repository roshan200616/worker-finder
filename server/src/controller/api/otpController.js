import { validationResult } from "express-validator";
import transporter from "../../config/mail.js";
import otpGenerator from "otp-generator";

const otpStore = {};

// generate OTP

const generateOTP = () => {
    return otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false ,lowerCaseAlphabets: false});
}

//send OTP to user email
export const sendOTPEmail = async (req, res) => {
    try{
        const {email}=req.body;   
        if(!email){
            return res.status(400).json({message: "Email is required"})
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const otp = generateOTP();
        //store the OTP in redis with a 5 minute expiration time
         otpStore[email]={
            otp:otp,
            expires:Date.now()+5*60*1000  
         } 
                //send OTP to user email
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "OTP for Worker Finder",
            text: `Your OTP for Worker Finder is ${otp}. It will expire in 5 minutes.`
        }
        await transporter.sendMail(mailOptions);
        res.status(200).json({message: "OTP sent to email"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message: "Error sending OTP email"})
    }
}


export const verifyOTPEmail = async (req, res) => {
    try {
        const { email,otp } = req.body;
        const data = otpStore[email];
        if (!data) {
            return res.status(400).json({
                message: "OTP not found"
            });
        }

        const storedOTP = data.otp;
        const expires = data.expires;
        if (Date.now() > expires) {
            delete otpStore[email];
            return res.status(400).json({
                message: "OTP has expired"
            });
        }

        if (Number(storedOTP) === Number(otp)) {
            delete otpStore[email];

            return res.status(200).json({
                message: "OTP verified"
            });
        }
        else{
           return res.status(400).json({
            message: "Invalid OTP"
        });

        }
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error verifying OTP email"
        });
    }
};
