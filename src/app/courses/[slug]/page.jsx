import React from "react";
import TopicCard from "../../../components/cards/TopicCard";
import Link from "next/link";

const page = () => {
  return (
    <div className=" py-6  flex flex-col gap-6 px-4 ">
      <div className=" flex justify-between items-center">
        <Link href={"/dashboard"}>
          <img src="/arrow-back.svg" alt="" />
        </Link>
        <p className=" font-semibold w-[70%] text-center text-sm ">
          Atoms and why they are important
        </p>
        <img src="/course-icon-black.svg" alt="" />
      </div>
      <img src="/video-demo.png" alt="" />
      <p>
        Lorem Ipsum dolor Lorem Ipsum dolor sit cosnmewdh Lorem Ipsum dolor sit
        cosnmewdh
      </p>
      <div className=" flex justify-between items-center">
        <p className=" text-sm font-bold">Beginners</p>
        <div className=" flex gap-1.5 items-center">
          <img src="/play-small.svg" alt="" />
          <p className=" text-sm ">2 videos</p>
        </div>
        <div className=" flex gap-1.5 items-center">
          <img src="/pdf.svg" alt="" />
          <p className=" text-sm ">1 PDF</p>
        </div>

        <Link className=" flex gap-1.5 items-center" href={"/courses/45/quiz"}>
          <img src="/question.svg" alt="" />
          <p className=" text-sm ">Quiz</p>
        </Link>
      </div>
      <p className=" font-black mt-4">Videos</p>
      <div className=" flex flex-wrap justify-between gap-6">
        {[
          { image: "/pic-1.png", topic: "Introduction to atoms" },
          { image: "/pic-2.png", topic: "what are atoms" },
        ].map((item, i) => (
          <div className=" w-[190px]  overflow-hidden flex flex-col gap-1.5">
            <img src={item.image} alt="" className=" rounded-lg" />
            <p className="text-sm">{item.topic}</p>
          </div>
        ))}
      </div>
      <p className=" font-black mt-4">Books</p>
      <div className=" flex flex-wrap justify-between gap-6">
        {[{ image: "/pic-1.png", topic: "Introduction to atoms" }].map(
          (item, i) => (
            <div className=" w-[190px]  overflow-hidden flex flex-col gap-1.5">
              <img src={item.image} alt="" className=" rounded-lg" />
              <p className="text-sm">{item.topic}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default page;
