import mongoose from "mongoose";

//setting up Schema(what type of data we will get)
const schema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description: {
        type:String,
        required:true,
    },
    isCompleted: {
        type: Boolean,
        default:false,
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User", // ref will be the name of the collection you have to make this sure.
        required: true,
    },
    createdAt:{
        type:Date,
        default: Date.now,
    },

});

//creating collection/model with the name of user
export const Task = mongoose.model("Task",schema);
