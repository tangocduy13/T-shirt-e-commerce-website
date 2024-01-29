import { registerUser } from "../repositories/userRepository.js";

const register = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    await registerUser({ phone: phoneNumber });
    return res.status(201).json({
      message: "ok",
    });
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

export { register, editProfile };
