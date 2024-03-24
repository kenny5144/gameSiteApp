import mongoose from "mongoose";

const UserDetailsScheme = new mongoose.Schema({
    UserName:String,
    Email:String,
    PassWord:String

},{
    collection:"UserInfo"
})
export const User = mongoose.model("UserInfo", UserDetailsScheme)