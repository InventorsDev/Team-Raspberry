"use client";
import React, { useState } from "react";
import Link from "next/link";
import TopicCard from "../../components/cards/TopicCard";
import BookCard from "../../components/cards/BookCard";
import Navbar from "../../components/nav/Navbar";

const page = () => {
  const [showVideos, setShowVideos] = useState(true);
  const savedVideos = {
    chemistry: [
      {
        img: "/pic-1.png",
        noCourse: 4,
        level: "beginners",
        topic: "titration",
      },
      {
        img: "/pic-2.png",
        noCourse: 1,
        level: "beginners",
        topic: "molecules",
      },
      { img: "/pic-3.png", noCourse: 7, level: "advanced", topic: "atoms" },
      { img: "/pic-1.png", noCourse: 4, level: "beginners", topic: "titration" },
      { img: "/pic-2.png", noCourse: 1, level: "beginners", topic: "molecules" },
      { img: "/pic-3.png", noCourse: 7, level: "advanced", topic: "atoms" },
    ],
    physics: [
      {
        img: "/pic-1.png",
        noCourse: 4,
        level: "intermediate",
        topic: "voltage",
      },
      {
        img: "/pic-2.png",
        noCourse: 1,
        level: "intermediate",
        topic: "current",
      },
      { img: "/pic-3.png", noCourse: 7, level: "advanced", topic: "waveforms" },
    ],
    biology: [
      { img: "/pic-1.png", noCourse: 4, level: "beginners", topic: "cells" },
      {
        img: "/pic-2.png",
        noCourse: 1,
        level: "intermediate",
        topic: "tissues",
      },
      { img: "/pic-3.png", noCourse: 7, level: "advanced", topic: "organs" },
    ],
    geology: [
      { img: "/pic-1.png", noCourse: 4, level: "beginners", topic: "space" },
      { img: "/pic-2.png", noCourse: 1, level: "intermediate", topic: "sands" },
      { img: "/pic-3.png", noCourse: 7, level: "advanced", topic: "rocks" },
    ],
  };

  const savedBooks = {
    biology: [
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
  return (
    <>
      {showVideos ? (
        <>
          <div className=" flex w-full justify-center px-4 bg-white z-40 fixed left-1/2 transform -translate-x-1/2 pt-6 pb-3">
            <p
              className=" font-semibold text-lg cursor-pointer"
              onClick={() => setShowVideos(!showVideos)}
            >
              Saved - Videos
            </p>
          </div>

          <div className=" py-6  pt-20 flex flex-col gap-6 px-4 pb-24 ">
            <div className=" w-full p-3 bg-[#8498CBB2] flex items-center gap-2.5 rounded-[20px] shadow-2xl shadow-[#17337962]">
              <img src="/biology-icon.svg" alt="" className=" w-[15ƒ0px]" />
              <div className=" flex flex-col gap-5">
                <p className=" text-white font-bold">
                  The branch of science concerned with the substances of which
                  matter is composed.
                </p>
                <p className=" text-sm text-[#173379] font-bold">5 topics</p>
              </div>
            </div>
            <p className=" mt-8 font-bold">Chemistry</p>
            <div className=" flex flex-wrap justify-between gap-6">
              {savedVideos.chemistry.map((items, i) => (
                <TopicCard
                  img={items.img}
                  noCourse={items.noCourse}
                  level={items.level}
                  topic={items.topic}
                />
              ))}
            </div>
            <p className="  font-bold">Geology</p>
            <div className=" flex flex-wrap justify-between gap-6">
              {savedVideos.geology.map((items, i) => (
                <TopicCard
                  img={items.img}
                  noCourse={items.noCourse}
                  level={items.level}
                  topic={items.topic}
                />
              ))}
            </div>
            <p className=" font-bold">Biology</p>
            <div className=" flex flex-wrap justify-between gap-6">
              {savedVideos.biology.map((items, i) => (
                <TopicCard
                  img={items.img}
                  noCourse={items.noCourse}
                  level={items.level}
                  topic={items.topic}
                />
              ))}
            </div>
            <Navbar />
          </div>
        </>
      ) : (
        <>
          <div className=" flex w-full justify-center px-4 bg-white fixed left-1/2 transform -translate-x-1/2 pt-6 pb-3 z-20">
            <p
              className=" font-semibold text-lg cursor-pointer"
              onClick={() => setShowVideos(!showVideos)}
            >
              Saved - Books
            </p>
          </div>
          <div className=" py-6  pt-20 flex flex-col gap-6 px-4 pb-24 ">
            <div className=" w-full p-3 bg-[#8498CBB2] flex items-center gap-2.5 rounded-[20px] shadow-2xl shadow-[#17337962]">
              <img src="/biology-icon.svg" alt="" className=" w-[15ƒ0px]" />
              <div className=" flex flex-col gap-5">
                <p className=" text-white font-bold">
                  The branch of science concerned with the substances of which
                  matter is composed.
                </p>
                <p className=" text-sm text-[#173379] font-bold">5 topics</p>
              </div>
            </div>
            <p className=" mt-8 font-bold">Chemistry</p>
            <div className=" flex flex-wrap justify-between gap-6">
              {savedBooks.chemistry.map((item, i) => (
                <BookCard slug={"36743"} image={item.img} topic={item.title} />
              ))}
            </div>
            <p className="  font-bold">Geology</p>
            <div className=" flex flex-wrap justify-between gap-6">
              {savedBooks.geology.map((item, i) => (
                <BookCard slug={"36743"} image={item.img} topic={item.title} />
              ))}
            </div>
            <p className=" font-bold">Biology</p>
            <div className=" flex flex-wrap justify-between gap-6">
              {savedBooks.biology.map((item, i) => (
                <BookCard slug={"36743"} image={item.img} topic={item.title} />
              ))}
            </div>
            <Navbar />
          </div>
        </>
      )}
    </>
  );
};

export default page;
