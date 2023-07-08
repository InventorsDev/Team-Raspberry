import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col justify-between h-screen py-[40px] px-4">
      <div className=" flex flex-col gap-12">
        <p className=" font-bold text-[28px]">LearnVerse</p>
        <span className=" text-[22px]">
          <span className=" font-black">Login</span> <span>to account</span>
        </span>
        <div className=" flex flex-col gap-8">
          <div className=" border border-[#5C50C7] h-[60px] rounded-full p-2">
            <p className=" bg-white w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm">
              Email
            </p>
            <input
              type="text"
              className=" w-full h-full bg-transparent outline-none px-3"
              placeholder="Example@gmail.com"
            />
          </div>
          <div className=" border border-[#5C50C7] h-[60px] rounded-full p-2">
            <input
              type="text"
              className=" w-full h-full bg-transparent outline-none px-3"
              placeholder="Enter password"
            />
          </div>
        </div>
        <button className="bg-gradient-to-l from-pink-500 to-indigo-600 h-[60px] rounded-full text-white font-semibold text-lg w-full">
          Login
        </button>
      </div>
      <div className=" flex justify-between">
        <Link href={"/reset"}>
          <p className=" text-[#5C50C7]">Forgot password?</p>
        </Link>
        <Link href={"/signup"}>
          <p className=" text-[#5C50C7]">Create an account</p>
        </Link>
      </div>
    </div>
  );
};

export default page;
