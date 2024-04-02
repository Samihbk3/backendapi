import express from "express";
import {
  // getAllUsers,
  getMyProfile,
  login,
  logout,
  register,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


// router.get("/all", getAllUsers);// we will get all the users at users it will be for admin user

//create users
router.post("/new", register);

router.post("/login", login);

router.get("/logout", logout);

//will get my profile
router.get("/me", isAuthenticated, getMyProfile);  //we will add isAuthenticated front of each route where we want  that user must be logged in to access that route//

export default router;
