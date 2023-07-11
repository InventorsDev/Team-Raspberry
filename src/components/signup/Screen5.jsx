import React from "react";
import Link from "next/link";

const Screen5 = ({ screen, setScreen }) => {
  return (
    <>
      <div className=" flex flex-col gap-12">
        <div className=" flex gap-[60px]">
          <button onClick={() => setScreen("screen_4")}>
            <img src="/arrow-back.svg" alt="" />
          </button>
          <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
            Create an account
          </p>
        </div>
        <div className=" flex gap-5 flex-col">
          <p className=" font-semibold text-[22px]">Set your Email</p>
          <p>Enter your Email to verify your Account</p>
        </div>
        <input
          type="text"
          className="  h-[60px] rounded-full border border-primary-green outline-none px-3"
        />
        <button
          className="bg-primaryButton h-[60px] rounded-full text-white font-semibold text-lg w-full"
          onClick={() => setScreen("screen_6")}
        >
          Continue
        </button>
      </div>
      <div className=" flex justify-center">
        <Link className="  text-primary-green" href={"/login"}>
          Login
        </Link>
      </div>
    </>
  );
};

export default Screen5;
