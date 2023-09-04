"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { AiFillBook, AiOutlineBook } from "react-icons/ai";

const Navbar = () => {
  const pathname = usePathname();
  const page = pathname.split("/")[1];

  return (
    <div className=" fixed bottom-4 left-1/2 transform -translate-x-1/2  w-[90%] shadow-[20px_50px_40px_100px_rgba(103,148,158,0.20)] bg-white flex justify-between py-3 px-5 rounded-full items-center z-50">
      <Link href={"/dashboard"}>
        <div className=" flex flex-col gap-1 items-center justify-center">
          <img src="/home-icon.svg" alt="" className=" w-6" />
          <p
            className={`${
              page == "dashboard" ? "text-[#9E7167]" : "text-[#8C8989]"
            } `}
          >
            Home
          </p>
        </div>
      </Link>
      {/* <Link href={"/bookmark"}>
        <div className=" flex flex-col gap-1 items-center justify-center">
          <img src="/course-icon.svg" alt="" className=" w-5" />
          <p
            className={`${
              page == "bookmark" ? "text-[#9E7167]" : "text-[#8C8989]"
            } `}
          >
            Saved
          </p>
        </div>
      </Link> */}
      <Link href={"/dictionary"}>
        <div className=" flex flex-col gap-1 items-center justify-center">
          {/* <img src="/library-icon.svg" alt="" className=" w-6" /> */}
          <AiOutlineBook className=" text-gray-400" size={30}/>
          <p
            className={`${
              page == "library" ? "text-[#9E7167]" : "text-[#8C8989]"
            } `}
          >
            Dictionary
          </p>
        </div>
      </Link>
      <Link href={"/profile"}>
        <div className=" flex flex-col gap-1 items-center justify-center">
          <img src="/profile-icon.svg" alt="" className=" w-6" />
          <p
            className={`${
              page == "profile" ? "text-[#9E7167]" : "text-[#8C8989]"
            } `}
          >
            Profile
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
