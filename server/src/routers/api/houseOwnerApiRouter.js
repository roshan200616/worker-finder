import express from "express";
import {getHouseOwners, getHouseOwnerById, createHouseOwner,updateHouseOwner,
    deleteHouseOwner,
    createJob,
    updateJob,
    createReview,
    showReviews,
    deleteReview,
    updateReview

} from "../../controller/api/houseOwnerController.js"

import houseOwnersValidation from "../../validators/houseOwnerValidator.js"
const router = express.Router()

router.get("/", getHouseOwners)
router.get("/:id", getHouseOwnerById)
router.get("/reviews/:id",showReviews)

router.post("/create/review",createReview)
router.post("/", houseOwnersValidation, createHouseOwner)
router.post("/create/job",createJob)

router.put("/:id", houseOwnersValidation, updateHouseOwner)
router.put("/update/job/:id",updateJob)
router.put("/update/review/:id",updateReview)


router.delete("/:id", deleteHouseOwner)
router.delete("/delete/review/:id",deleteReview)    

export default router
