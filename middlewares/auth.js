import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies; // Extract token from request cookies with the help of cookie-parser middleware

  if (!token)
    return res.status(401).json({
      success: false,
      message: "Login first",
    });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded._id); // we will add it to req function so it will be available inside req once a user successfully logged in

  await next();//once it successfully logged in it will redirect to next route decoded data wil be inside req.
};
