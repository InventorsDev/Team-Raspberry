"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BookCard from "../../components/cards/BookCard"

const page = () => {
  const books = {
    biology: [
      { img: "/book-1.png", title: "biology" },
      { img: "/book-1.png", title: "biology" },
      { img: "/book-1.png", title: "biology" },
      { img: "/book-1.png", title: "biology" },
      { img: "/book-1.png", title: "biology" },
      { img: "/book-1.png", title: "biology" },
    ],
    chemistry: [
      { img: "/book-2.png", title: "chemistry" },
      { img: "/book-2.png", title: "chemistry" },
      { img: "/book-2.png", title: "chemistry" },
    ],
    physics: [
      { img: "/book-3.png", title: "physics" },
      { img: "/book-3.png", title: "physics" },
      { img: "/book-3.png", title: "physics" },
    ],
    geology: [
      { img: "/book-4.png", title: "geology" },
      { img: "/book-4.png", title: "geology" },
      { img: "/book-4.png", title: "geology" },
    ],
  };
  const [screen, setScreen] = useState("biology");

  return (
    <div className=" py-6 px-4 flex flex-col">
      <div className=" flex gap-[60px]">
        <Link href={"/dashboard"}>
          <img src="/arrow-back.svg" alt="" />
        </Link>
        <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
          Library
        </p>
      </div>
      <div className=" w-full rounded-[20px] bg-primaryBg flex flex-col opacity-75 mt-12">
        <p className=" text-white py-4 px-5">Continue reading</p>
        <div className=" bg-[#D9D9D9] w-full py-4 px-5 rounded-b-[20px] flex gap-5 items-center">
          <div className=" w-12 h-12 bg-slate-800" />
          <div>
            <p className=" text-black font-bold">Time</p>
            <p className=" text-sm pt-2">Book 3 of 4</p>
          </div>
        </div>
      </div>
      <div className=" flex justify-between mt-10 items-center">
        <p
          className={` ${screen == "biology" && "font-bold"} cursor-pointer`}
          onClick={() => setScreen("biology")}
        >
          Biology
        </p>
        <p
          className={` ${screen == "chemistry" && "font-bold"} cursor-pointer`}
          onClick={() => setScreen("chemistry")}
        >
          Chemistry
        </p>
        <p
          className={` ${screen == "physics" && "font-bold"} cursor-pointer`}
          onClick={() => setScreen("physics")}
        >
          Physics
        </p>
        <p
          className={` ${screen == "geology" && "font-bold"} cursor-pointer`}
          onClick={() => setScreen("geology")}
        >
          Geology
        </p>
      </div>
      
      <div className=" flex gap-6 flex-wrap justify-between mt-6 overflow-y-auto h-[50vh] pb-5">
        {books[screen].map((item, i) => (
          <BookCard slug={"36743"} image={item.img} topic={item.title}  />
        ))}
      </div>
      <Navbar />
    </div>
  );
};

export default page;
