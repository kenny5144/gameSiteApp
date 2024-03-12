import mongoose from "mongoose";

const UserDetailsScheme = new mongoose.Schema({
    UserName:String,
    Email:String,
    Password:String

},{
    collection:"UserInfo"
})
const UserModel = mongoose.model("UserInfo", UserDetailsScheme)
export {UserModel as User}