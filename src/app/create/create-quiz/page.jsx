import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" px-4 py-6">
      <div className=" flex">
        <Link href={"/create"}>
        <Image width={20} height={20} src="/arrow-back.svg" alt="" className=" cursor-pointer" />
        </Link>
        <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
          Create Quiz
        </p>
      </div>
      <div className=" flex flex-col gap-9 py-6 border-b border-[#828282]">
        <div className=" flex flex-col gap-2">
          <p>Question</p>
          <textarea
            type="text"
            className=" border-2 rounded-[10px] p-2 border-[#919191] outline-none text-[#777777]"
          />
        </div>
        <div className=" flex flex-col gap-2">
          <p>Correct Answer</p>
          <input
            type="text"
            className=" border rounded-[10px] p-2 border-[#3CBD6B] outline-none text-[#777777]"
          />
        </div>
        <div className=" flex flex-col gap-2">
          <p>Dud Answer(s)</p>
          <div className=" flex gap-4 items-center">
            <input
              type="text"
              className=" border rounded-[10px] p-2 border-[#FA2E2E] outline-none text-[#777777] w-full"
            />
            <button className=" bg-[#67949E] h-[50px] min-w-[50px] flex items-center justify-center rounded-full">
            <Image width={20} height={20} src="/close.svg" alt="" />
            </button>
          </div>
        </div>
        <div>
          <div className=" flex items-center gap-5">
            <button className=" bg-[#67949E] h-[50px] w-[50px] flex items-center justify-center rounded-full">
            <Image width={20} height={20} src="/add.svg" alt="" />
            </button>
            <p className=" italic text-[#626262]">2 more questions left</p>
          </div>
          <div className=" flex justify-end">
          <Image width={20} height={20} src="/delete.svg" alt="" />
          </div>
        </div>
      </div>
      <div className=" fixed bottom-6 flex w-[90%] justify-between items-center left-1/2 transform -translate-x-1/2">
        <button className=" px-7 py-3 rounded-[10px] shadow-[2px_4px_10px_0px_rgba(43,43,43,0.25)]">
          Add
        </button>
        <div className=" bg-[#67949E] h-[50px] w-[50px] flex items-center justify-center rounded-full text-white">
          1
        </div>
        <button className=" px-7 py-3 rounded-[10px] shadow-[2px_4px_10px_0px_rgba(43,43,43,0.25)]">
          Save
        </button>
      </div>
    </div>
  );
};

export default page;
