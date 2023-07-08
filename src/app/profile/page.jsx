import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className=" flex flex-col p-4">
      <div className=" flex gap-[60px]">
        <Link href={"/"}>
          <img src="/arrow-back.svg" alt="" />
        </Link>
        <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
          Your Profile
        </p>
      </div>
      <div className=" mt-[30px] flex gap-8 items-center">
        <img src="/profile-picture.png" alt="" />
        <div>
          <p className=" text-[22px] font-semibold">John Doe</p>
          <p className=" text-sm">Example@gmail.com</p>
        </div>
      </div>
      <div className=" mt-[50px] flex flex-col gap-4">
        <div className=" bg-[#D9D9D980] h-[60px] w-full rounded-[16px] flex items-center px-[30px] font-medium">
          Angelina Jolie
        </div>
      </div>
    </div>
  );
};

export default page;
