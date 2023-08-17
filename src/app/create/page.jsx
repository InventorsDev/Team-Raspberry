"use client";
import React, { useState } from "react";
import TutorsCard from "../../components/cards/TutorsCard";
import Link from "next/link";

const page = () => {
  const [dashboard, setDashboard] = useState(false);
  return (
    <>
      {dashboard ? (
        <div className=" py-6 px-4 flex flex-col">
          <div className=" flex gap-[60px] justify-end">
            <img
              src="/upload.svg"
              alt=""
              className=" cursor-pointer"
              onClick={() => setDashboard(false)}
            />
            <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
              Home
            </p>
          </div>
          <div className=" flex flex-col gap-5 mt-6">
            <p className=" font-bold text-lg">My Videos</p>
            <TutorsCard />
          </div>
        </div>
      ) : (
        <div className=" bg-[#9E7167] pt-6 ">
          <div className=" flex gap-[60px] text-white px-4">
            <img
              src="/arrow-back-white.svg"
              onClick={() => setDashboard(true)}
              alt=""
              className=" cursor-pointer"
            />
            <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
              Upload
            </p>
          </div>
          <div className="w-full flex items-center justify-center py-10 gap-5 flex-col ">
            <img src="/upload-white.svg" alt="" />
            <p className=" text-white font-bold text-xl">Upload Cover</p>
          </div>
          <div className=" h-full py-[50px] rounded-t-[20px] w-full bg-white px-6 flex flex-col gap-6 pb-28">
            <div className=" flex flex-col gap-2">
              <p>Title</p>
              <input
                type="text"
                className=" border-b border-[#919191] outline-none"
                placeholder="My first Video"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <p>Description</p>
              <textarea
                type="text"
                className=" border-b border-[#919191] outline-none "
                placeholder="Description of the video"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <p>Level</p>
              <input
                type="text"
                className=" border-b border-[#919191] outline-none text-[#777777]"
                placeholder="Intermediate"
              />
            </div>
            <div className=" flex flex-col gap-6">
              <img
                src="/video-1.png"
                alt=""
                className=" rounded-[10px] w-[160px]"
              />
              <div className=" flex justify-between">
                <div className=" flex gap-4 items-center">
                  <img src="/add-button.svg" alt="" />
                  <p>Add Video</p>
                </div>
                <button className=" px-8 bg-[#37494E] text-white rounded-full">
                  Use AI!
                </button>
              </div>
              <div className=" w-full h-[1px] bg-[#828282]" />
              <div className=" flex gap-4 items-center">
                <img src="/add-button.svg" alt="" />
                <p>Add PDF</p>
              </div>
              <div className=" w-full h-[1px] bg-[#828282]" />

              <div className=" flex justify-between items-center">
                <Link href={"/create/create-quiz"}>
                  <div className=" px-8 bg-[#37494E] text-white rounded-full h-[50px] flex items-center">
                    Add Quiz
                  </div>
                </Link>
                <p className=" font-bold ">Time: 5:00</p>
              </div>
            </div>
          </div>
          <button className=" bg-primaryButton w-[90%] fixed bottom-6  left-1/2 transform -translate-x-1/2 h-[60px] rounded-full text-white">
            UPLOAD
          </button>
        </div>
      )}
    </>
  );
};

export default page;
