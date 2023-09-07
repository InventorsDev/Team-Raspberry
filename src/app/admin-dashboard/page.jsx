import React from "react";
import AdminNav from "../../components/nav/AdminNav";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className=" flex px-4 py-6 gap-5 flex-col">
      <div className=" font-bold text-center">Dashboard</div>
      <p className=" font-bold">Hi Elvis!</p>
      <div className=" py-2.5 px-3.5 ">
        <p className=" font-bold">Total Revenue</p>
        <p className=" font-bold text-2xl mt-2">$890</p>
      </div>
      <div className=" py-2.5 px-3.5 shadow-[10px_10px_50px_10px_rgba(75,93,97,0.09)] rounded-[20px]">
        <div className=" flex justify-between items-center">
          <div className=" flex flex-col items-center">
            <p className=" font-bold">Active users</p>
            <p className=" font-bold text-2xl">3,000</p>
          </div>
          <div className=" flex flex-col items-center">
            <div className=" flex gap-1 items-center">
              <p>4.2</p>
              <Image width={20} height={20} src="/increase.svg" alt="" />
            </div>
            <p className=" text-[#B4B4B4] text-[15px]">vs last week</p>
          </div>
        </div>
        <Image width={20} height={20} src="/line-graph.png" className="w-full" alt="" />
      </div>
      
      <div className=" py-2.5 px-3.5 shadow-[10px_10px_50px_10px_rgba(75,93,97,0.09)] rounded-[20px] flex gap-2.5 flex-col">
        <div className=" flex justify-between items-end">
          <p className=" font-bold">Creators</p>
          <p className=" text-[#B4B4B4] text-[15px]">Videos this week</p>
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
      <AdminNav />
    </div>
  );
};

export default page;
