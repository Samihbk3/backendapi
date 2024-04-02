import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import ErrorHandler from "../middlewares/error.js";


//export const getAllUsers = async (req, res) => {}; function to get the details of all users for admin panel

//⨇
//TODO:function for login
//⨈

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password"); //.select will also include password for our visibility when we will access the user data

  if (!user) return next(new ErrorHandler("Invalid Email or Password", 400));

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
  return next(new ErrorHandler("Invalid Email or Password", 400));
  sendCookie(user, res, `welcome back, ${user.name}`, 200); //it will also fetch the name
  } catch (error) {
    next(error);
  }
};

//⨇
//FIXME: Function for register
//⨈

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
  let user = await User.findOne({ email });

  if (user) return next(new ErrorHandler("User already exists", 400));

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await User.create({ name, email, password: hashedPassword });

  sendCookie(user, res, "Registered Successfully", 201); //fetching from feature file of utils
  } catch (error) {
    next(error);
  }
};

//⨇
//TODO:function to get a details of a specific id
//⨈

export const getMyProfile = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

//⨇
//logout function
//⨈

export const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(0), // Set expiration date to the past to immediately invalidate the cookie
      maxAge: 0, // Setting maxAge to 0 for immediate expiration (alternative to using expires)
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      user: req.user,
    });
};

