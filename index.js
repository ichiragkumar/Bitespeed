const express  = require("express")
require('dotenv').config()

const app = express()



const PORT = process.env.PORT || 4000

app.get("/", (req, res)=>{
    res.send("hii chirag welcome")
})


app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}/`);
})