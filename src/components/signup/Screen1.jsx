import React from "react";
import Link from "next/link";

const Screen1 = ({ screen, setScreen }) => {
  return (
    <div className=" flex flex-col justify-between h-screen">
      <div className=" flex flex-col gap-[130px] max-w-[600px] w-full">
        <div className=" flex flex-col gap-7 pt-[20px]">
          <p className="font-bold font-montserrat text-lg">Welcome to</p>
          <p className="font-bold font-montserrat text-4xl">LearnVerse</p>
        </div>
        <div className=" flex flex-col gap-7 pb-[20px]">
          <p className=" font-semibold">
            Verify your mobile number to continue
          </p>
          <input
            type="text"
            className=" w-full h-[60px] rounded-full px-4 outline-none border border-primary-green"
          />
          <button
            className=" bg-primaryButton h-[60px] rounded-full text-white font-semibold text-lg"
            onClick={() => setScreen("screen_2")}
          >
            Get OTP
          </button>
        </div>
      </div>

      <div className=" flex justify-center">
        <Link href={"/login"} className="  text-primary-green">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Screen1;
