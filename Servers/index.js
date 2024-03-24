import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
import { User } from "./data/Userdetails.js";
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Database Connected ");
  })
  .catch((e) => {
    console.log(e.message);
  });

app.get("/", (req, res) => {});
app.get("/signup", (req, res) => {
  console.log("hi");
  res.send({ status: "Started" });
});

app.post("/signup", async (req, res) => {
  const { UserName, Email, PassWord } = req.body;
  if (!UserName || !Email || !PassWord) {
    return res.status(404).json({
      success: false,
      message: "data is empty",
    });
  }

  const emailexist = await User.findOne({ Email: Email });
  if (emailexist) {
    return res.status(404).json({ error: "Email is taken" });
  }
  try {
    const user = await User.create({
      UserName: UserName,
      Email: Email,
      PassWord:PassWord,
    });

    if (!user) {
      return res.status(500).json({
        message: " something went wrong",
      });
    }
    return res.status(401).json({
      success: false,
      message: "Not authorize",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// app.get("/favorite", auth, (req, res) => {});

// function auth(req, res, next) {
//   const id = req.params.id;
//   const foundUser = user.findone(id);
//   if (!foundUser) return res.status(404).json({});
//   next();
// }
app.post('/signin', async (req, res)=>{
  try {
    const {email , password}=req.body
    console.log(email,password)
    if ( !email || !password) {
      return res.status(404).json({
        success: false,
        message: "data is empty",
      });
    }
    const emailexist = await User.findOne({ Email:email });
    if (!emailexist) {
      return res.status(404).json({ error: "Email does not exist try making an acount " });
    }
  const passWordMatch = await User.findOne({PassWord: password })
  console.log(passWordMatch)
  if(emailexist && passWordMatch){
    console.log("yes");
    return res.status(200).json({message:' account found '})
  }else {
    return res.status(404).json({message: "Wrong password please try again"})
  }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}) 
app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT}`);
});
