import React from "react";
import Link from "next/link";
import Image from "next/image";

const Screen2 = ({ setScreen }) => {
  return (
    <>
      <div className=" flex flex-col gap-12">
        <div className=" flex gap-[60px]">
          <button onClick={() => setScreen("screen_1")}>
               
 <Image 
 height={40}
 width={40}
       src="/arrow-back.svg" alt="" />
          </button>
          <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
            Reset Password
          </p>
        </div>
        <div className=" flex gap-5 flex-col">
          <p className=" font-semibold text-[22px]"> Reset Password</p>
          <p>Enter your email to get a reset link sent to you</p>
        </div>
        <div className=" flex flex-col gap-8">
          <div className=" border-primary-green border h-[60px] rounded-full p-2">
            <p className=" bg-white w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm whitespace-nowrap">
              New password
            </p>
            <input
              type="text"
              className=" w-full h-full bg-transparent outline-none px-3"
            />
          </div>
          <div className=" border border-primary-green h-[60px] rounded-full p-2">
            <input
              type="text"
              className=" w-full h-full bg-transparent outline-none px-3"
              placeholder="Confirm new password"
            />
          </div>
        </div>
        <button className=" bg-primaryButton h-[60px] rounded-full text-white font-semibold text-lg w-full">
          Change password
        </button>
      </div>
    </>
  );
};

export default Screen2;
