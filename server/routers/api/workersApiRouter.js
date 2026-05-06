import express from "express";
// import db file
import queryExec from "../../dbConnection.js"
//import validation file
import workerValidation from "../../validators/workerValidator.js";

import { validationResult } from "express-validator";

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const result = await queryExec(`select * from workers`)
        if (result.length === 0) {
            res.status(404).json("data not found")
            return
        }
        else {
            res.status(200).json(result)
            return
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json("server error")
    }
})
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const result = await queryExec(`select * from workers where id = ?`, [id])
        if (result.length === 0) {
            res.status(404).json("not found")
            return
        }
        else {
            res.status(200).json(result)
            return
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json("server error")
    }
})
router.post("/", workerValidation, async (req, res) => {

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
            work,
            latitude,
            longitude
        } = req.body;
        const values = [
            name,
            mobileNo,
            email,
            password,
            area,
            city,
            state,
            pin,
            work,
            latitude,
            longitude
        ];

        const result = await queryExec(`INSERT INTO workers 
      (name, mobileNo, email, password, area, city, state, pin, work, latitude, longitude)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, values)
        if (result.affectedRows === 0) {
            res.status(404).json("Not found")
        }
        else {
            res.status(200).json("Success")
        }

    }
    catch (err) {
        console.log(err)
        res.status(500).json("Server error")
    }

})
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        const keys = Object.keys(data)
        const values = Object.values(data)
        console.log(values)
        const set = keys.map(key => `${key}=?`).join(',')
        const result = await queryExec(`update workers set ${set} where id =? `, [...values, id])
        if (result.affectedRows === 0) {
            res.status(404).json("Not found")
            return
        }
        else {
            res.status(200).json("Success")
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json("Server error")
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const result = await queryExec(`delete from workers where id = ?`,[id])
        if(result.affectedRows === 0){
            res.status(404).json("Not found")
            return
        }
        else{
            res.status(200).json(success)
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json("server error")
    }
})
export default router
