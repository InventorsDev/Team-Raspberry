import React from "react";
import Link from "next/link";

const Screen5 = () => {
  return (
    <>
      <div className=" flex flex-col gap-12">
        <div className=" flex gap-[60px]">
          <Link href={"/signup"}>
            <img src="/arrow-back.svg" alt="" />
          </Link>
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
          className="  h-[60px] rounded-full border border-[#F95DA0] outline-none px-3"
        />
        <button className="bg-gradient-to-l from-pink-500 to-indigo-600 h-[60px] rounded-full text-white font-semibold text-lg w-full">
          Continue
        </button>
      </div>
      <div className=" flex flex-col gap-7">
        <button>Login to Account</button>
      </div>
    </>
  );
};

export default Screen5;
