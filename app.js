import express from "express";
import userRouter from "./routes/user.js";
import {config} from "dotenv";

export const app = express();

config({
    path:"./data/config.env",
});

const router = express.Router();

//all middlewears
app.use(express.json()); // to recieve json format data
app.use("/users", userRouter);


app.get("/", (req,res)=>{
    res.send("Default HomePage");
});