import queryExec from "../../dbConnection.js";
import { validationResult } from "express-validator";
//import bcrypt for password hashing
import bcrypt from "bcrypt"

export const getHouseOwners = async (req, res) => {
    try {
        const result = await queryExec(`select * from house_owners`)
        if (result.length === 0) {
            res.status(404).json("Not found")
            return
        }
        else {
            const {password,latitude,longitude, ...hashedResult} = result[0]
            res.status(200).json(hashedResult)
            return
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json("server error")
    }
}
export const getHouseOwnerById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await queryExec(`select * from house_owners where id = ?`, [id])
        if (result.length === 0) {
            res.status(404).json("Not found")
            return
        }
        else {
            const {password,latitude,longitude, ...hashedResult} = result[0]
            res.status(200).json(hashedResult)
            return
        }

    }
    catch (err) {

        console.log(err)
        res.status(500).json("server error")
    }
}

export const createHouseOwner = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() })
            return
        }
        const {
            name,
            mobileNo,
            email,
            password,
            area,
            city,
            state,
            pin,
            latitude,
            longitude
        } = req.body;

        const values = [
            name,
            mobileNo,
            email,
            await bcrypt.hash(password, 10),
            area,
            city,
            state,
            pin,
            latitude,
            longitude

        ]
        const result = await queryExec(`insert into house_owners (name, mobileNo, email, password, area, city, state, pin, latitude, longitude) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, values)
        if (result.affectedRows === 1) {
            res.status(201).json("House owner created successfully")
            return
        }

    }
    catch (err) {
        console.log(err)
        res.status(500).json("server error")
    }
}
export const updateHouseOwner = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() })
            return
        }
        const id = req.params.id;
        const data = req.body
        const hashedPassword = data.password ? await bcrypt.hash(data.password, 10) : undefined
        if (hashedPassword) {
            data.password = hashedPassword
        }
        const values = Object.values(data)
        const keys = Object.keys(data)
        const set = keys.map(key => `${key} = ?`).join(", ")
        const result = await queryExec(`UPDATE house_owners SET ${set} WHERE id = ?`, [...values, id]);
        if (result.affectedRows === 0) {
            res.status(404).json("Not found")
        } else {
            res.status(200).json("Success")
        }
    } catch (err) {
        console.log(err)
        res.status(500).json("Server error")
    }
}
export const deleteHouseOwner = async (req, res) => {
    try {
        const id = req.params.id
        const result = await queryExec(`delete from house_owners where id = ?`, [id])
        if (result.affectedRows === 0) {
            res.status(404).json("Not found")
            return
        }
        else {
            res.status(200).json("success")
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json("server error")
    }
}
































