import {
 getWorkersModel,
 getWorkerByIdModel,
 createWorkersModel,
 updateWorkerModel,
 deleteWorkerModel,
 softDeleteModel
} from "../../models/workersModel.js";
import { getJobsmodel,acceptJobmodel ,getAcceptedjobsModel} from "../../models/jobsModel.js";
import { validationResult } from "express-validator";
import { body } from "express-validator";
//import bcrypt for password hashing
import bcrypt from "bcrypt"
export const getWorkers = async (req, res) => {
    try {
        const result = await getWorkersModel()
        if(result.length === 0){
            res.status(404).json("Not found")
            return
        }   
        else{
            res.status(200).json(result)
            return
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json("server error")
    }
}

export const getJob =  async (req,res) =>{
    try{
        const result =  await getJobsmodel()
         if(result.length === 0){
            res.status(404).json({message:"not found"})
            return
         }
         else{
            res.status(200).json(result)
         }
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
}

export const getWorkerById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await getWorkerByIdModel(id)
        if(result.length === 0){
            res.status(404).json("Not found")
            return
        }
        else{
            res.status(200).json(result)
            return
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json("server error")
    }
}
export const showAccpetedJobs = async (req,res)=>{
    try{
        const id = req.params.id
        const value = "accepted"
        const result = await getAcceptedjobsModel(id,value)
        if(result.length ===0){
            res.status(404).json({message:"not found"})
            return
        }
        else{
            res.status(200).json(result)
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
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
    
        const result = await createWorkersModel(values)
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
        const id = req.params.id;   
        const data = req.body;
        if(data.email || data.mobileNo){
            const mobileRegex = /^[6-9]\d{9}$/
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(!emailRegex.test(data.email)){
                return res.status(400).json({message:"Invalid email "})
            }
            if(!mobileRegex.test(data.mobileNo)){
                return res.status(400).json({message:"Invalid number"})
            }
        }
        const values = Object.values(data)
        const keys = Object.keys(data)
        const setString = keys.map(key => `${key} = ?`).join(", ");
        const result = await updateWorkerModel(id,values,setString)
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
export const accpetJob = async (req,res)=>{
    try{
        const workerId = req.params.id
        const {status,id} = req.body
        const result = await acceptJobmodel(id,status,workerId)
        if(result.affectedRows === 0){
            res.status(404).json({message:"not found"})
            return
        }
        else{
            res.status(200).json({message:"worke accepted "})
            return
        }

    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
}
export const softDelete = async (req,res)=>{
    try{
        const id = req.params.id
        const result = await softDeleteModel(id)

        if(result.affectedRows ===0){
            res.status(404).json("Worker not found")
            return
        }
        else{
            res.status(200).json({message:"worker softdelete successfully "})
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"server error"})
    }
}

export const deleteWorker = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await deleteWorkerModel(id)
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


