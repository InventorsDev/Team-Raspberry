"use client";
import React, { useState } from "react";
import Link from "next/link";
import Edit from "../../components/profile/Edit";
import Save from "../../components/profile/Save";
import Navbar from "../../components/Navbar";

const page = () => {
  const [screen, setScreen] = useState("edit");
  return (
    <div className=" flex flex-col px-4 py-8 justify-between h-screen">
      <div>
        <div className=" flex gap-[60px]">
          {screen == "edit" ? (
            <Link href={"/dashboard"}>
              <img src="/arrow-back.svg" alt="" />
            </Link>
          ) : (
            <img
              src="/arrow-back.svg"
              alt=""
              className=" cursor-pointer"
              onClick={() => setScreen("edit")}
            />
          )}
          <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
            Profile
          </p>
        </div>

        <>{screen == "edit" ? <Edit setScreen={setScreen} /> : <Save />}</>
      </div>
      {screen == "edit" ? (
        <Navbar />
      ) : (
        <button
          className=" bg-primaryButton h-[60px] rounded-full text-white"
          onClick={() => setScreen("edit")}
        >
          Save
        </button>
      )}
    </div>
  );
};

export default page;
