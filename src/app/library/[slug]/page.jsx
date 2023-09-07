"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const [screen, setScreen] = useState("front");
  return (
    <>
      {screen == "front" ? (
        <div className=" py-6 flex flex-col gap-6">
          <div className=" flex gap-[60px] px-4">
            <Link href={"/library"}>
            <Image width={20} height={20} src="/arrow-back.svg" alt="" />
            </Link>
            <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
              What are cells
            </p>
          </div>
          <Image width={40} height={40} src="/book-cover.png" className=" w-full" alt="" />
          <div className=" flex flex-col px-4 gap-3">
            <p className=" font-bold">Summary</p>
            <p className=" text-sm text-[#646464] leading-6">
              Lorem Ipsum dolor Lorem Ipsum dolor sit cosnmewdh Lorem Ipsum
              dolor sit cosnmewdh v Lorem Ips cosnmcosnmewdh Lorem Ipsum dolor
              sit cosnmewdh v Lorem ewdh Lorem Ipsum dolor sit cosnmewdh sit
              cosnmewdh Lorem Ipsum dolor Lorem Ipsum dolor sit cosnmewdh Lorem
              Ipsum dolor sit cosnmewdh v Lorem cosnmewdh Lorem Ipsum dolor sit
              cosnmewdh v Lorem Ipsum dolor sit cosnmewdh Lorem Ipsum dolor sit
              cosnmewdh Lorem Ipsum dolor sit cosnmewdh
            </p>
          </div>
          <div className=" fixed w-[90%] bottom-6 left-1/2 transform -translate-x-1/2 flex gap-5">
            <button>
            <Image width={20} height={20} src="/bookmark.svg" alt="" />
            </button>
            <button
              className=" bg-primaryButton w-full rounded-full text-white"
              onClick={() => setScreen("main")}
            >
              Start Reading
            </button>
          </div>
        </div>
      ) : (
        <div className=" py-6 px-4 h-screen">
          <div className=" flex items-center">
            <button onClick={() => setScreen("front")}>
            <Image width={20} height={20} src="/arrow-back.svg" alt="" />
            </button>
            <p className="  text-sm absolute left-1/2 transform -translate-x-1/2 w-[70%] text-center">
              What are cells -<span className=" font-semibold"> Chapter 1</span>
            </p>
          </div>
          <div className=" overflow-y-auto h-[85vh] mt-6">
            <p className=" leading-7 text-[#5a5a5a]">
              Lorem Ipsum dolor Lorem Ipsum dolor sit cosnmewdh Lorem Ipsum
              dolor Lorem Ipsum dolor sit cosnmewdh Lorem Ipsum dolor sit
              cosnmewdh v Lorem Ips cosnmcosnmewdh Lorem Ipsum dolor sit
              cosnmewdh v Lorem ewdh Lorem Ipsum dolor sit cosnmewdh sit
              cosnmewdh Lorem Ipsum dolor Lorem Ipsum dolor sit cosnmewdh Lorem
              Ipsum dolor sit cosnmewdh v Lorem cosnmewdh Lorem Ipsum dolor sit
              cosnmewdh v Lorem Ipsum dolor sit cosnmewdh Lorem Ipsum dolor sit
              Ipsum dolor sit cosnmewdh v Lorem Ipsum dolor sit cosnmewdh Lorem
              Ipsum dolor sit Ipsum dolor sit cosnmewdh v Lorem Ipsum dolor sit
              cosnmewdh Lorem Ipsum dolor sit Ipsum dolor sit cosnmewdh v Lorem
              Ipsum dolor sit cosnmewdh Lorem Ipsum dolor sit Ipsum dolor sit
              cosnmewdh v Lorem Ipsum dolor sit cosnmewdh Lorem Ipsum dolor sit
              Ipsum dolor sit cosnmewdh v Lorem Ipsum dolor sit cosnmewdh Lorem
              Ipsum dolor sit Ipsum dolor sit cosnmewdh v Lorem Ipsum dolor sit
              cosnmewdh Lorem Ipsum dolor sit Ipsum dolor sit cosnmewdh v Lorem
              Ipsum dolor sit cosnmewdh Lorem Ipsum dolor sit Ipsum dolor sit
              cosnmewdh v Lorem Ipsum dolor sit cosnmewdh Lorem Ipsum dolor sit
              Ipsum dolor sit cosnmewdh v Lorem Ipsum dolor sit cosnmewdh Lorem
              Ipsum dolor sit Ipsum dolor sit cosnmewdh v Lorem Ipsum dolor sit
              cosnmewdh Lorem Ipsum dolor sit Ipsum dolor sit cosnmewdh v Lorem
              Ipsum dolor sit cosnmewdh Lorem Ipsum dolor sit Ipsum dolor sit
              cosnmewdh v Lorem Ipsum dolor sit cosnmewdh Lorem Ipsum dolor sit
              Ipsum dolor sit cosnmewdh v Lorem Ipsum dolor sit cosnmewdh Lorem
              Ipsum dolor sit Ipsum dolor sit cosnmewdh v Lorem Ipsum dolor sit
              cosnmewdh Lorem Ipsum dolor sit Ipsum dolor sit cosnmewdh v Lorem
              Ipsum dolor sit cosnmewdh Lorem Ipsum dolor sit Ipsum dolor sit
              cosnmewdh v Lorem Ipsum dolor
            </p>
          </div>
          <div className=" w-[90%] fixed bottom-6 left-1/2 transform -translate-x-1/2 flex justify-between">
            <button className=" py-3 px-3 bg-[#aaa9a9] rounded-full">
            <Image width={30} height={30} src="/arrow-back-white.svg" alt="" />
            </button>
            <button className=" py-3 px-3 bg-[#aaa9a9] rounded-full">
            <Image width={30} height={30} src="/arrow-front-white.svg" alt="" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
