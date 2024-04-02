import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
  path: "./data/config.env",
});
const router = express.Router();

//all middlewares
app.use(express.json()); ////to see data in json format always make sure that you use express.json prior to Routes so it could send the data in json format when we were accessing the routes
app.use(cookieParser()); //to access the details of cookie
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // if not set to true, frontend won't receive credentials
  })
);
console.log("Frontend URL:", process.env.FRONTEND_URL);

//using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  res.send("Default HomePage");
});

//using error middleware
app.use(errorMiddleware);
