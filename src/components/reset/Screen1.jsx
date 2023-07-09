import React from "react";
import Link from "next/link";

const Screen1 = ({setScreen}) => {
  return (
    <>
      <div className=" flex flex-col gap-12">
        <div className=" flex gap-[60px]">
          <Link href={"/login"}>
            <img src="/arrow-back.svg" alt="" />
          </Link>
          <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
            Reset Password
          </p>
        </div>
        <div className=" flex gap-5 flex-col">
          <p className=" font-semibold text-[22px]"> Reset Password</p>
          <p>Enter your email to get a reset link sent to you</p>
        </div>
        <input
          type="text"
          className="  h-[60px] rounded-full border border-[#343434] outline-none px-3"
        />
        <button className="bg-gradient-to-l from-pink-500 to-indigo-600 h-[60px] rounded-full text-white font-semibold text-lg w-full" onClick={() => setScreen("screen_2")}>
          Send reset email
        </button>
      </div>
    </>
  );
};

export default Screen1;
