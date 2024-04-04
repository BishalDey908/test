/* eslint-disable no-undef */
const dotenv =require("dotenv")
dotenv.config()
const express = require("express")
const mongoose = require ("mongoose")
const app = express()
const model = require("./model")
const cors = require ("cors")
const bodyParser = require("body-parser") //new  version of middleware

app.use(cors())
app.use(bodyParser.json()) //new  version of middleware

// app.get("/home",(req,res)=>{
//     res.send("all ok")
// })

app.post("/register",(req,res)=>{
    const {username,email,password} = req.body
    console.log(req.body)
    //add data to mongodb
    model.create({username,email,password})
    .then(()=>{
        res.json("ok")
    })
    .catch((err)=>console.log(err))
})



app.listen(`${process.env.PORT}`,()=>{
    console.log(`Server is running on port 3001`)
})

mongoose.connect(`${process.env.CONNECTION_STRING}`)
.then(()=>{
    console.log("Db connected")
})
.catch((err)=>console.log(err))