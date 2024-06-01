import express from "express"
import identifyUser from "../controller/identify.controller.js"
const router = express.Router()
console.log("i am here at routje");


// router.get("/allUser", getlAllUser)

router.post("/identify", identifyUser)

export default router