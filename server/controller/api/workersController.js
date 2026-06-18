import queryExec from "../../dbConnection.js";
import { validationResult } from "express-validator";
//import bcrypt for password hashing
import bcrypt from "bcrypt"
export const getWorkers = async (req, res) => {
    try {
        const result = await queryExec(`select * from workers`) 
        if(result.length === 0){
            res.status(404).json("Not found")
            return
        }   
        else{
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

export const getWorkerById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await queryExec(`select * from workers where id = ?`, [id])
        if(result.length === 0){
            res.status(404).json("Not found")
            return
        }
        else{
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

export const createWorker = async (req, res) => {
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
    
        const result = await queryExec(`insert into workers (name, mobileNo, email, password, area, city, state, pin, latitude, longitude) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, values)  
      if(result.affectedRows === 0){
         res.status(400).json("Failed to create worker")
      }
      else{
         res.status(201).json("Worker created successfully")
      }
    }
    catch (err) {
        console.log(err)
        res.status(500).json("server error")
    
    
    }
    
}

export const updateWorker = async (req, res) => {
    try {
        const errors = validationResult(req)
     if(!errors.isEmpty()){
         res.status(400).json({errors: errors.array()})
            return
        }
        const id = req.params.id;   
        const data = req.body;
        const hashedPassword = data.password ? await bcrypt.hash(data.password, 10) : undefined
        if (hashedPassword) {
            data.password = hashedPassword
        }
        const values = Object.values(data)
        const keys = Object.keys(data)
        const setString = keys.map(key => `${key} = ?`).join(", ");
        const result = await queryExec(`update workers set ${setString} where id = ?`, [...values, id]) 
        if(result.affectedRows === 0){
            res.status(404).json("Worker not found")
            return
        }
        else{
            res.status(200).json("Worker updated successfully")
            return
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json("server error")

    }
}

export const deleteWorker = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await queryExec(`delete from workers where id = ?`, [id])
        if(result.affectedRows === 0){
            res.status(404).json("Worker not found")
            return
        }
        else{
            res.status(200).json("Worker deleted successfully")
            return
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json("server error")
    }
}


