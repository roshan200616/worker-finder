import express from "express";
import {getHouseOwners, getHouseOwnerById, createHouseOwner,updateHouseOwner,
    deleteHouseOwner,
    createJob,
    updateJob,
    createReview

} from "../../controller/api/houseOwnerController.js"

import houseOwnersValidation from "../../validators/houseOwnerValidator.js"
const router = express.Router()

router.get("/", getHouseOwners)
router.get("/:id", getHouseOwnerById)

router.post("/create/review",createReview)
router.post("/", houseOwnersValidation, createHouseOwner)
router.post("/create/job",createJob)

router.put("/:id", houseOwnersValidation, updateHouseOwner)
router.put("/update/job/:id",updateJob)
router.delete("/:id", deleteHouseOwner)
export default router
