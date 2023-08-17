"use client";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [payment, setPayment] = useState("year");
  const [screen, setScreen] = useState("first");
  return (
    <>
      {screen == "confirmed" ? (
        <div className=" bg-[#292D32] h-screen text-white pt-6 flex flex-col justify-between">
          <div className=" flex gap-[60px] px-4">
            <button onClick={() => setScreen("first")}>
              <img src="/arrow-back-white.svg" alt="" />
            </button>
            <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
              Checkout
            </p>
          </div>
          <p className=" font-bold text-center text-[25px]">Done!</p>
          <div className=" bg-white w-full h-[65%] rounded-t-3xl flex justify-around items-center flex-col text-[#343434] px-8">
            <img src="/checkout.svg" alt="" />
            <div className=" flex flex-col items-center gap-4">
              <p className=" font-bold text-xl">Thank you for Subscribing</p>
              <p>You have access to all courses available!</p>
            </div>
            <Link href={"/dashboard"} className=" w-full">
              <div className=" w-full py-3 bg-primaryButton rounded-full text-white flex justify-center">
                CONTINUE
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className=" py-6 px-4 flex flex-col gap-6">
          <div className=" flex gap-[60px]">
            <Link href={"/profile"}>
              <img src="/arrow-back.svg" alt="" />
            </Link>
            <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
              Checkout
            </p>
          </div>
          <div className=" flex flex-col gap-1">
            <p className=" font-bold text-lg">Choose a plan</p>
            <p className=" text-sm text-[#5d5d5d]">
              Select the offer that best suits your need
            </p>
            {/* <p className=" text-sm text-[#5d5d5d]">No refund after payment, so choose wisely</p> */}
          </div>
          <div className="  p-4 bg-[#3F454D] rounded-[20px] flex gap-4 items-center text-white mt-6">
            <img src="/master-card.svg" alt="" />
            <div>
              <p>Team Raspberry</p>
              <p>xxxx1035</p>
            </div>
          </div>

          <div
            className={` ${
              payment == "year" && "border-[#67949E]"
            } border-[3px] p-4 bg-[#3F454D] rounded-[20px] flex justify-between pr-8 items-start text-white`}
            onClick={() => setPayment("year")}
          >
            <div className="flex gap-2 items-start">
              <img src="/bullet.svg" alt="" className=" pt-1" />
              <div>
                <p className=" font-bold">Yearly</p>
                <p className=" text-[#C4C4C4] text-sm pt-1">
                  Pay for a full year
                </p>
              </div>
            </div>
            <p className="font-bold">N50,000</p>
          </div>

          <div
            className={` ${
              payment == "month" && "border-[#67949E]"
            } border-[3px] p-4 bg-[#3F454D] rounded-[20px] flex justify-between pr-8 items-start text-white`}
            onClick={() => setPayment("month")}
          >
            <div className="flex gap-2 items-start">
              <img src="/bullet.svg" alt="" className=" pt-1" />
              <div>
                <p className=" font-bold">Monthly</p>
                <p className=" text-[#C4C4C4] text-sm pt-1">
                  Pay monthly, cancel at any time
                </p>
              </div>
            </div>
            <p className="font-bold">N5,000</p>
          </div>
          <button
            className=" w-[90%] bottom-5 py-3 bg-primaryButton text-white font-bold rounded-full absolute left-1/2 transform -translate-x-1/2"
            onClick={() => setScreen("confirmed")}
          >
            Pay
          </button>
        </div>
      )}
    </>
  );
};

export default page;
