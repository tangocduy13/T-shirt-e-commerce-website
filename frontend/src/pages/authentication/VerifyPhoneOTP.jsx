import React, { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import "react-phone-input-2/lib/style.css";

const VerifyPhoneOTP = ({ otp, setOtp, onOTPVerify, loading }) => {
  return (
    <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md mx-auto mt-24">
      <div className="flex flex-col space-y-2 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Confirm OTP</h2>
        <p className="text-md md:text-xl">Enter the OTP we just sent you.</p>
      </div>
      <div className="flex flex-col max-w-md space-y-5">
        <input
          value={otp}
          onChange={(event) => {
            setOtp(event.target.value);
          }}
          type="text"
          placeholder="OTP"
          className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <button
          onClick={onOTPVerify}
          className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
        >
          {loading && <CgSpinner size={20} className={"mt-1 animate-spin"} />}
          Confirm
        </button>
      </div>
    </div>
  );
};

export default VerifyPhoneOTP;
