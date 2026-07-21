import express from "express";
// import db file
//import validation file
import workerValidation from "../../validators/workerValidator.js";
//import the controller
import {getWorkers,getWorkerById,createWorker,updateWorker,deleteWorker,softDelete,getJob,accpetJob
    ,showAccpetedJobs,showReviews
} from "../../controller/api/workersController.js"


const router = express.Router()
router.get("/", getWorkers)
router.get("/jobs",getJob)
router.get("/:id", getWorkerById)
router.get("/accepted/job/:id",showAccpetedJobs)
router.get("/reviews/:id",showReviews)

router.post("/", workerValidation, createWorker)

router.put("/:id", workerValidation, updateWorker)
router.put("/accept/job/:id",accpetJob)
router.put("/softDelete/:id",softDelete)
router.delete("/:id", deleteWorker)

export default router
