import mongoose from "mongoose";

//setting up Schema(what type of data we will get)
const schema = new mongoose.Schema({
    name:String,
    email: {
        type:String,
        unique:true,
    },
    password: {
        type: String,
        select:false,
    },
    createdAt:{
        type:Date,
        default: Date.now,
    },

});
//creating collection/model with the name of user
export const User = mongoose.model("User",schema);
