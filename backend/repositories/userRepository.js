import User from "../models/User.js";

const registerUser = async ({ phone }) => {
  await User.create({ phone: phone });
};

export { registerUser };
