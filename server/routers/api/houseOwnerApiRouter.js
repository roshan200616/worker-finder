import express from "express";
import queryExec from "../../dbConnection.js";
import houseOwnersValidation from "../../validators/houseOwnerValidator.js";
import { validationResult } from "express-validator";
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const result = await queryExec(`select * from house_owners`)
        if (result.length === 0) {
            res.status(404).json("Not found")
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
        const id = req.params.id;
        const result = await queryExec(`select * from house_owners where id = ?`, [id])
        if (result.length === 0) {
            res.status(404).json("Not found")
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
router.post("/",houseOwnersValidation, async (req, res) => {
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
            password,
            area,
            city,
            state,
            pin,
            latitude,
            longitude
        ];

        const result = await queryExec(`INSERT INTO house_owners 
               (name, mobileNo, email, password, area, city, state, pin, latitude, longitude)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, values)
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
router.put("/:id", async (req, res) => {
    try {
        const  id  = req.params.id;
        const data = req.body
        const values = Object.values(data)
        const keys = Object.keys(data)
        const set =  keys.map(key => `${key} = ?`).join(", ")
        const result = await queryExec(`UPDATE house_owners SET ${set} WHERE id = ?`, [...values, id]);

        if (result.affectedRows === 0) {
            res.status(404).json("Not found");
        } else {
            res.status(200).json("Success");
        }
    } catch (err) {
        console.log(err);
        res.status(500).json("Server error");
    }
});
router.delete("/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const result = await queryExec(`delete from house_owners where id = ?`,[id])
        if(result.affectedRows === 0){
            res.status(404).json("Not found")
            return
        }
        else{
            res.status(200).json("success")
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json("server error")
    }
})
export default router
