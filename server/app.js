import express from "express";

// import api router 
import  workersApi from "./routers/api/workersApiRouter.js"
import houseOwnerApi from "./routers/api/houseOwnerApiRouter.js"


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.send("server created");
});
// api routers
app.use("/api/workers/",workersApi)
app.use("/api/houseowners/",houseOwnerApi)


app.listen(3000, () => {
    console.log("server running on 3000 port");
});