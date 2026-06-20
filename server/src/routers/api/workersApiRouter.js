import express from "express";
// import db file
//import validation file
import workerValidation from "../../validators/workerValidator.js";
//import the controller
import {getWorkers,getWorkerById,createWorker,updateWorker,deleteWorker} from "../../controller/api/workersController.js"

const router = express.Router()
router.get("/", getWorkers)
router.get("/:id", getWorkerById)
router.post("/", workerValidation, createWorker)
router.put("/:id", workerValidation, updateWorker)
router.delete("/:id", deleteWorker)
export default router
