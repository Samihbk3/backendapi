import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";

//function to get the details of all users
export const getAllUsers = async (req, res) => {};

//⨇

//⨈

//TODO:function for login
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password"); //.select will also include password for our visibility when we will access the user data

  if (!user)
    return res
      .status(401)
      .json({ success: false, message: "Invalid Email or Password" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    return res
      .status(401)
      .json({ success: false, message: "Invalid Email or Password" });

  sendCookie(user, res, `welcome back, ${user.name}`, 200); //it will also fetch the name
};

//⨇

//⨈

//FIXME: Function for register
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });

  if (user) {
    return res
      .status(404)
      .json({ success: false, message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await User.create({ name, email, password: hashedPassword });

  sendCookie(user, res, "Registered Successfully", 201); //fetching from feature file of utils
};

//⨇

//⨈

//TODO:function to get a details of a specific id
export const getMyProfile = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

//⨇

//⨈

export const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", {expires: new Date(Date.now())})
    .json({
      success: true,
      user: req.user,
    });
};
