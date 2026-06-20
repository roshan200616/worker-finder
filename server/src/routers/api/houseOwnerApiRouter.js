import express from "express";
import {getHouseOwners, getHouseOwnerById, createHouseOwner,updateHouseOwner,deleteHouseOwner} from "../../controller/api/houseOwnerController.js"
import houseOwnersValidation from "../../src/validators/houseOwnerValidator.js"
const router = express.Router()

router.get("/", getHouseOwners)
router.get("/:id", getHouseOwnerById)
router.post("/", houseOwnersValidation, createHouseOwner)
router.put("/:id", houseOwnersValidation, updateHouseOwner)
router.delete("/:id", deleteHouseOwner)
export default router
