import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

export const app = express();

config({
  path: "./data/config.env",
});

const router = express.Router();

//all middlewares

//to see data in json format
app.use(express.json());  // always make sure that you use express.json prior to Routes so it could send the data in json format when we were accessing the routes
app.use(cookieParser());  //to access the details of cookie
app.use("/api/v1/users", userRouter);





app.get("/", (req, res) => {
  res.send("Default HomePage");
});
