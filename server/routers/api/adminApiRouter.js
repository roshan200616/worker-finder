import express from "express";
const router = express.Router()

router.get("/workers", )
router.get("/houseOwners", async (req, res) => {
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
router.get("/admins", async (req, res) => {
    try {
        const result = await queryExec(`select * from admins`)
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
export default router  