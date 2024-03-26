import express from "express";
import { User } from "../models/user.js";
import { deleteUser, getAllUsers, getUserDetails, register, specialFunc, updateUser } from "../controllers/user.js";

const router = express.Router();


// we will get all the users at users/all
router.get("/all", getAllUsers);

//create users
router.post("/new", register);

//route for special id
router.get("/userid/special", specialFunc);

//find by specific id
router.route("/userid/:id")
.get(getUserDetails)
.put(updateUser)
.delete(deleteUser);



export default router;