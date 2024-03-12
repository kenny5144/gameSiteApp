import express from "express";
// import dotenv from 'dotenv'
import mongoose from "mongoose";
// dotenv.config()
const uri='mongodb+srv://ojok761:Iamkehindeojo123@gamesite.jmpbm1v.mongodb.net'
const app = express()
import {User} from "./data/Userdetails.js"
app.use(express.json())
// require("./data/Userdetails")
mongoose.connect(uri).then(()=>{
console.log("Database Connected ")
console.log(User)
})
.catch((e)=>{
    console.log(e)
})

app.get('/signup', (req , res)=>{
    console.log("hi");
    res.send({status:"Started"})
})

app.post('/signup', async (req , res)=>{
        const {UserName , Email , Password}=req.body
        console.log({UserName,Password, Email})
        const emailexist= await User.findOne({Email:Email})
        if (emailexist){
            return res.send({data:"User already exist !!"})
        }
        try{
                await User.create({
                    UserName: UserName,
                    Email: Email,
                    Password
                });
                res.send({status:"ok", data:"user Created "})
        }catch(err){
            res.send({
                status:"err", data: err
            })
        }
})
app.listen(8080, ()=>{
    console.log("server is running k ")
})