import { loginUser, registerUser } from "../repositories/userRepository.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const register = async (req, res) => {
  try {
    const { phoneNumber, password, passwordConfirm } = req.body;
    if (password === passwordConfirm) {
      const result = await registerUser({
        phone: phoneNumber,
        password,
      });
      return res.status(201).json({
        message: result,
      });
    } else {
      return res.status(400).json({
        message: "Password and password confirm doesn't match",
      });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const login = async (req, res) => {
  try {
    const { accountName, password } = req.body;
    const user = await loginUser({ accountName, password });
    if (user !== null) {
      const accessToken = jwt.sign(
        {
          userInfo: {
            id: user.id,
            role: user.role,
          },
        },
        process.env.SECRET_KEY,
        { expiresIn: "7d" },
      );

      res.cookie("token", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.status(200).json({ message: `Hello ${user.fullName}` });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const editProfile = async (req, res) => {
  const user = {
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    address: req.body.address,
    gender: req.body.gender,
  };
  console.log(user);
};

export { register, login, editProfile };
