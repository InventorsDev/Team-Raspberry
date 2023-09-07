"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const page = pathname.split("/")[1];

  return (
    <div className=" fixed bottom-4 left-1/2 transform -translate-x-1/2  w-[90%] shadow-[20px_50px_40px_100px_rgba(103,148,158,0.20)] bg-white flex justify-between py-3 px-5 rounded-full items-center z-50">
      <Link href={"/admin-dashboard"}>
        <div className=" flex flex-col gap-1 items-center justify-center">
          <Image width={20} height={20} src="/home-icon.svg" alt="" className=" w-6" />
          <p
            className={`${
              page == "admin-dashboard" ? "text-[#9E7167]" : "text-[#8C8989]"
            } `}
          >
            Dashboard
          </p>
        </div>
      </Link>
      <Link href={"/admin-manage-course"}>
        <div className=" flex flex-col gap-1 items-center justify-center">
        <Image width={20} height={20} src="/book-icon.svg" alt="" className=" w-6" />
          <p
            className={`${
              page == "admin-manage-course"
                ? "text-[#9E7167]"
                : "text-[#8C8989]"
            } `}
          >
            Courses
          </p>
        </div>
      </Link>
      <Link href={"/admin-manage-creators"}>
        <div className=" flex flex-col gap-1 items-center justify-center">
        <Image width={20} height={20} src="/creators-icon.svg" alt="" className=" w-6" />
          <p
            className={`${
              page == "admin-manage-creators"
                ? "text-[#9E7167]"
                : "text-[#8C8989]"
            } `}
          >
            Creators
          </p>
        </div>
      </Link>
      <Link href={"/admin-add-admin"}>
        <div className=" flex flex-col gap-1 items-center justify-center">
        <Image width={20} height={20} src="/profile-icon.svg" alt="" className=" w-6" />
          <p
            className={`${
              page == "admin-add-admin" ? "text-[#9E7167]" : "text-[#8C8989]"
            } `}
          >
            Admin
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
