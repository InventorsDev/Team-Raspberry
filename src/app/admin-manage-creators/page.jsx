import React from "react";
import AdminNav from "../../components/nav/AdminNav";
import Image from "next/image";

const page = () => {
  return (
    <div className=" flex px-4 gap-5 flex-col py-20">
      <div className=" flex justify-center w-full fixed top-6 bg-white">
        <p className=" font-bold">Creators</p>
      </div>

      <div className=" py-2.5 px-3.5 shadow-[10px_10px_50px_10px_rgba(75,93,97,0.09)] rounded-[20px] flex gap-2.5 flex-col">
        <div className=" flex justify-between items-end">
          <p className=" font-bold">Creators</p>
          <p className=" text-[#B4B4B4] text-[15px]">Total Videos</p>
        </div>
        <div className=" w-full h-[1px] bg-[#828282]" />
        <div className=" py-1.5 flex flex-col gap-4">
          <div className=" flex justify-between items-center">
            <p>Darlene Robertson</p>
            <p>3</p>
          </div>
          <div className=" flex justify-between items-center">
            <p>Darlene Robertson</p>
            <p>3</p>
          </div>
        </div>
      </div>

      <div className=" py-2.5 px-3.5 shadow-[10px_10px_50px_10px_rgba(75,93,97,0.09)] rounded-[20px] flex gap-2.5 flex-col">
        <div className=" flex justify-between items-end">
          <p className=" font-bold text-[15px]">Pending creators</p>
          <p className=" text-[#B4B4B4] text-[15px]">Download CV</p>
        </div>
        <div className=" w-full h-[1px] bg-[#828282]" />
        <div className=" py-1.5 flex flex-col gap-4">
          <div className=" flex justify-between items-center">
            <p className=" text-sm w-1/2">Darlene Robertson</p>
            <button className=" text-green-500 ml-[-28px] font-bold text-sm">
              Approve
            </button>
            <Image width={20} height={20} src="/download.svg" alt="" />
          </div>
          <div className=" flex justify-between items-center">
            <p className=" text-sm w-1/2">Darlene Robertson</p>
            <button className=" text-green-500 ml-[-28px] font-bold text-sm">
              Approve
            </button>

            <Image width={20} height={20} src="/download.svg" alt="" />
          </div>
        </div>
      </div>

      <AdminNav />
    </div>
  );
};

export default page;
