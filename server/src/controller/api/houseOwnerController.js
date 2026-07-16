import {getHouseOwnersByIdModel,getHouseOwnersModel,createHouseOwnerModel,updateHouseOwnerModel,deleteHouseOwnerModel} 
from "../../models/houseOwnerModel.js";
import {createJobModel,updateJobmodel} from "../../models/jobsModel.js"
import {createReviewModel} from "../../models/reviewsModel.js"
import { validationResult } from "express-validator";
//import bcrypt for password hashing
import bcrypt from "bcrypt"

export const getHouseOwners = async (req, res) => {
    try {
        const result = await getHouseOwnersModel()
        if (result.length === 0) {
            res.status(404).json("Not found")
            return
        }
        else {
            const {password,latitude,longitude, ...hashedResult} = result
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
        const result = await getHouseOwnersByIdModel(id)
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
        const result = await createHouseOwnerModel(values)
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
export const createJob = async (req,res)=>{
    try{
        const data = req.body
        const values =[
            data.ownerId,
            data.houseId,
            data.workType,
            data.description,
            data.status,
        ]
        const result = await createJobModel(values)
        if(result.affectedRows === 0){
            res.status(404).json({message:"not found"})
            return
        }

        else{
            res.status(201).json({message:"job created"})
            return
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
}
export const createReview = async (req,res)=>{
    try{
        const data = req.body
        const values =[
            data.ownerId,
            data.workerId,
            data.rating,
            data.comment
        ]
        const result = await createReviewModel(values)
        res.status(201).json({message:"review created"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
}
export const updateHouseOwner = async (req, res) => {
    try {
      
        const id = req.params.id;
        let data = req.body
        const hashedPassword = data.password ? await bcrypt.hash(data.password, 10) : undefined
        if (hashedPassword) {
            data.password = hashedPassword
        }
        const values = Object.values(data)
        const keys = Object.keys(data)
        const set = keys.map(key => `${key} = ?`).join(", ")
        const result = await updateHouseOwnerModel(id,values,set);
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
export const updateJob = async (req,res)=>{
    try{
        const id = req.params.id
        const data = req.body 
        const values = Object.values(data)
        const keys = Object.values(data)
        const sets = keys.map(key => `${key} = ?`).join(", ")
        const result = await updateJobmodel(id,values,sets)
        if(result.affectedRows ===0){
            res.status(404).json({message:"not found"})
            return
        }
        else{
            res.status(200).json({message:"success"})
        }
    }
    catch(err){
         console.log(err)
         res.status(500).json({message:"server error"})
    }

} 
export const deleteHouseOwner = async (req, res) => {
    try {
        const id = req.params.id
        const result = await deleteHouseOwnerModel(id)
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
































