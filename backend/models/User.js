import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      default: "customer",
    },
    phone: {
      type: String,
      unique: true,
    },
    address: String,
    status: {
      // active inactive verifying
      type: String,
      default: "verifying",
    },
    verifyCode: String,
  },
  {
    timestamps: true,
  },
);

userSchema.plugin(mongoosePaginate);

const User = mongoose.model("User", userSchema);

export default User;
