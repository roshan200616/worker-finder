import { LoginModel } from "../../models/loginModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const loginController = async (req, res) => {
    try {
        const { email, password, tableName } = req.body
        const result = await LoginModel(email, tableName)
        if (result.length === 0) {
            return res.status(404).json({ "message": "User not found" })
        }
        else {
            const originalPassword = result[0].password
        
            const isPasswordMatch = await bcrypt.compare(password, originalPassword)
            if (!isPasswordMatch) {
                return res.status(401).json({ "message": "Invalid password" })
            }
            else {
                const { user, password, createdAt, updateAt, deleteAt, longitude, latitude } = result[0]
                const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '5h' })
                return res.status(200).json(token)
            }

        }

    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ "message": "server error" })
    }
}