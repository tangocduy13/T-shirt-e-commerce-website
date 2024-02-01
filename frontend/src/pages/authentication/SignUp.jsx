import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import axiosUser from "../../helpers/api.js";

const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const handleSignUp = async () => {
    const data = {
      phoneNumber,
      password,
      passwordConfirm,
    };
    await axiosUser
      .post("/register", data)
      .then((response) => {
        const message = response.data.message;
        console.log(message);
        setPhoneNumber("");
        setPassword("");
        setPasswordConfirm("");
      })
      .catch((e) => {
        if (e.response) {
          console.log(e.response.data.message);
        }
        setPassword("");
        setPasswordConfirm("");
        setPhoneNumber("");
      });
  };
  return (
    <div className={"flex justify-center justify-items-center"}>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Phone Number
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your phone number"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={phoneNumber}
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Password
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={password}
              type={"password"}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Password Confirm
            </Typography>
            <Input
              size="lg"
              placeholder="Confirm your password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={passwordConfirm}
              type={"password"}
              onChange={(event) => {
                setPasswordConfirm(event.target.value);
              }}
            />
          </div>
          <Button className="mt-6" fullWidth onClick={handleSignUp}>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
