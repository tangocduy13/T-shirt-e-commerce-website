import React, { useState } from "react";
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import axiosUser from "../../helpers/api.js";
import { useNavigate } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";

const SignIn = () => {
  const navigate = useNavigate();
  const [accountName, setAccountName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const data = { accountName, password };
    await axiosUser
      .post("/login", data)
      .then((response) => {
        setLoading(false);
        navigate("/products", { state: { message: "Xin chao Duy" } });
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          console.log(error.response.data.message);
        }
        setAccountName("");
        setPassword("");
      });
  };

  return (
    <div className={"flex justify-center justify-items-center"}>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Welcome back! Enter your details to login.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Phone Number/ Email
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your phone number or email"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={accountName}
              onChange={(event) => setAccountName(event.target.value)}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <Button
            className="mt-6 flex items-center justify-center h-10"
            fullWidth
            onClick={handleLogin}
          >
            {loading && <CgSpinner size={20} className={"mt-1 animate-spin"} />}
            sign in
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            You don't have an account yet?{" "}
            <a href="" className="font-medium text-gray-900">
              Sign Up
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default SignIn;
