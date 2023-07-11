"use client";

import Link from "next/link";
import { useState } from "react";

const Screen4 = ({ screen, setScreen }) => {
  const [active, setActive] = useState("");
  return (
    <>
      <div className=" flex flex-col gap-12">
        <div className=" flex gap-[60px]">
          <button onClick={() => setScreen("screen_3")}>
            <img src="/arrow-back.svg" alt="" />
          </button>
          <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
            Create an account
          </p>
        </div>
        <p className=" font-semibold text-[22px]">Choose your role</p>

        <div className=" flex flex-col gap-5">
          <div
            className={` flex p-3 gap-2 items-center  border ${
              active == "student" ? "border-primary-green" : ""
            }  rounded-[15px] cursor-pointer`}
            onClick={() => setActive("student")}
          >
            <img src="/student-icon.svg" alt="" />
            <div>
              <p className=" font-semibold">Student</p>
              <p className=" opacity-50 text-sm">come and learn</p>
            </div>
          </div>
          <div
            className={` flex p-3 gap-2 items-center  border ${
              active == "creator" ? "border-primary-brown" : ""
            }  rounded-[15px] cursor-pointer`}
            onClick={() => setActive("creator")}
          >
            <img src="/tutor-icon.svg" alt="" />
            <div>
              <p className=" font-semibold">Creator</p>
              <p className=" opacity-50 text-sm">
                just create beautiful content
              </p>
            </div>
          </div>
        </div>

        <button
          className="bg-primaryButton h-[60px] rounded-full text-white font-semibold text-lg w-full"
          onClick={() => setScreen("screen_5")}
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

export default Screen4;
