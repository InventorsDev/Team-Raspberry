'use client'
import ProgressBar from "@/components/ProgressBar";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Link from "next/link";
import { useState } from "react";



export default function Home() {

    
  
  return (
    <div className="bg-gradient-to-b from-pink-500 to-indigo-600 h-screen flex flex-col items-center py-[60px] justify-between">
      <div className=" flex flex-col gap-[30px] items-center">
        <div className=" w-[200px] h-[200px] rounded-full bg-white ">
          <img
            src="/girl-study.png"
            alt=""
            className=" w-[250px] absolute left-1/2 transform -translate-x-1/2 "
          />
        </div>
        <div className=" min-w-[500px]"></div>
        <p className=" w-[250px] font-bold text-center text-3xl font-montserrat">
          Learn Anytime, Anywhere
        </p>
        <p className=" w-[340px] opacity-80 font-semibold font-montserrat text-center text-sm">
          Enjoy the captivating process of online education in a place & at a
          time of your choice, Comfort and Convenience.
        </p>
      </div>
      <div className=" w-full px-5 flex flex-col gap-[26px]">
        <ProgressBar />
        <div className=" flex justify-center ">

        {/* <Link href='/login'>   */}
        <button  className=" bg-white grid place-items-center w-[60px] h-[60px] rounded-full ">
          <img src="/forward-arrow.svg" alt="" />
        </button>
         {/* </Link> */}
        </div>
      </div>



     
    </div>
  );
}
