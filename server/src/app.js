import express from "express";


// import api router 
import  workersApi from "./routers/api/workersApiRouter.js"
import houseOwnerApi from "./routers/api/houseOwnerApiRouter.js"
import otpApi from "./routers/api/otpApiRouters.js"


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.send("server created");
});
// api routers
app.use("/api/workers/",workersApi)
app.use("/api/houseowners/",houseOwnerApi)
app.use("/api/otp/", otpApi)


export default app;