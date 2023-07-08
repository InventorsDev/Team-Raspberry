import React from "react";
import Link from "next/link";

const Screen6 = () => {
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
          <p className=" font-semibold text-[22px]">Email verification</p>
          <p>
          Please check your Email for the verification code sent nd input the code in the box.
          </p>
        </div>
        <div className=" flex justify-between px-2">
          {[1, 1, 1, 1, 1].map((item, i) => (
            <input
              type="text"
              className=" w-[45px] h-[60px] rounded-[15px] border border-[#5B52C7] outline-none px-3"
            />
          ))}
        </div>
        <div className=" flex gap-5 flex-col items-center">
          <button className="bg-gradient-to-l from-pink-500 to-indigo-600 h-[60px] rounded-full text-white font-semibold text-lg w-full">
            Verify
          </button>
          <button className="border-b-2 border-transparent hover:border-[#F95DA0] px-3 transition duration-300 ease-in-out w-min">
            Resend
          </button>
        </div>
      </div>
      <div className=" flex flex-col gap-7">
        <button>Login to Account</button>
      </div>
    </>
  );
};

export default Screen6;
