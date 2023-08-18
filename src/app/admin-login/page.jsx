import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col justify-between h-screen py-[40px] px-4">
      <div className=" flex flex-col gap-12">
        <p className=" font-bold text-[28px]">LearnVerse</p>
        <span className=" text-[22px] font-bold">Admin Login</span>
        <form className="flex flex-col gap-8">
          <div className=" flex flex-col gap-8">
            <div className=" border border-primary-green h-[60px] rounded-full p-2">
              <p className=" bg-white w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm font-extralight">
                Email
              </p>
              <input
                type="text"
                required
                className=" w-full h-full bg-transparent outline-none px-3"
              />
            </div>
            <div className=" border border-primary-green h-[60px] rounded-full p-2">
              <input
                type="password"
                required
                className=" w-full h-full bg-transparent outline-none px-3"
                placeholder="Password"
              />
            </div>
          </div>
          <Link href={"/admin-dashboard"}>
            <div
              type="submit"
              className=" bg-primaryButton h-[60px] rounded-full text-white font-semibold text-lg w-full flex items-center justify-center"
            >
              Login
            </div>
          </Link>
        </form>
      </div>

      <div className=" flex justify-between text-primary-green">
        <Link href={"/"}>
          <p>Forgot password?</p>
        </Link>
      </div>
    </div>
  );
};

export default page;
