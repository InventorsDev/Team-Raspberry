import React from "react";
import Link from "next/link";

const Screen4 = () => {
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
        <p className=" font-semibold text-[22px]">Choose your role</p>

        <div className=" flex flex-col gap-5">
          <div className=" flex p-3 gap-2 items-center border border-[#F95DA0] rounded-[15px] cursor-pointer">
            <img src="/student-icon.svg" alt="" />
            <div>
              <p className=" font-semibold">Student</p>
              <p className=" opacity-50 text-sm">come and learn</p>
            </div>
          </div>
          <div className=" flex p-3 gap-2 items-center  border border-[#5B52C7] rounded-[15px] cursor-pointer">
            <img src="/tutor-icon.svg" alt="" />
            <div>
              <p className=" font-semibold">Creator</p>
              <p className=" opacity-50 text-sm">
                just create beautiful content
              </p>
            </div>
          </div>
        </div>

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

export default Screen4;
