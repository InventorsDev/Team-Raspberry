"use client";
import React, { useState } from "react";
import AdminNav from "../../components/nav/AdminNav";

const page = () => {
  const [add, setAdd] = useState(false);
  return (
    <div className=" flex px-4 gap-6 flex-col py-20">
      <div className=" flex justify-center w-full fixed top-6 bg-white">
        <p className=" font-bold">Admin</p>
      </div>
      {add ? (
        <>
          <div className=" flex flex-col gap-2.5">
            <p>Email</p>
            <input
              type="text"
              className=" border-b border-[#919191] outline-none text-[#777777]"
              placeholder="example@mail.com"
            />
          </div>
          <p className=" font-bold text-sm">
            Note that adding an admin gives authoritative right to manage the
            application.
          </p>
          <div className=" flex justify-end pb-4">
            <button
              className=" px-8 bg-[#37494E] text-white rounded-full h-[40px]"
              onClick={() => setAdd(false)}
            >
              Add
            </button>
          </div>
        </>
      ) : (
        <div className=" flex gap-4 items-center">
          <img src="/add-button.svg" alt="" onClick={() => setAdd(true)} className=" cursor-pointer" />
          <p>Add admin</p>
        </div>
      )}

      <div className=" py-2.5 px-3.5 shadow-[10px_10px_50px_10px_rgba(75,93,97,0.09)] rounded-[20px] flex gap-2.5 flex-col">
        <div className=" flex justify-between items-end">
          <p className=" font-bold">Admins</p>
          <p className=" text-[#B4B4B4] text-[15px]">Date Joined</p>
        </div>
        <div className=" w-full h-[1px] bg-[#828282]" />
        <div className=" py-1.5 flex flex-col gap-4">
          <div className=" flex justify-between items-center">
            <p className=" text-sm">Darlene Robertson</p>
            <p className=" text-sm">January, 2023</p>
          </div>
        </div>
      </div>

      <AdminNav />
    </div>
  );
};

export default page;
