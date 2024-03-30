import mongoose from "mongoose";

//setting up Schema(what type of data we will get)
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    select: false, //whenever we will access the user data it wont show the password
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
//creating collection/model with the name of user
export const User = mongoose.model("User", schema);
