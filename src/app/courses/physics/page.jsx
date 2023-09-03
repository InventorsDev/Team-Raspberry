import React from "react";
import TopicCard from "../../../components/cards/TopicCard";
import Link from "next/link";

const page = () => {
  return (
    <div className=" py-6  flex flex-col gap-6 px-4 ">
      <div className=" flex gap-[60px]">
        <Link href={"/dashboard"}>
          <img src="/arrow-back.svg" alt="" />
        </Link>
        <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
          Physics
        </p>
      </div>
      <div className=" w-full p-3 bg-[#e88190b1] flex items-center gap-2.5 rounded-[20px] shadow-2xl shadow-[#17337962]">
        <img src="/physics.svg" alt="" className=" w-[150px]" />
        <div className=" flex flex-col gap-5">
          <p className=" text-white font-bold">
            The branch of the science that deals with matter, energy and their interactions
          </p>
          <p className=" text-sm text-[#173379] font-bold">5 topics</p>
        </div>
      </div>
      <div className=" grid   grid-cols-2 w-full  gap-6 mt-8">
        <TopicCard
          img={"/phy1.jpeg"}
          noCourse={3}
          level={"Intermediate"}
          topic={"Modern Physics"}
        />
        <TopicCard
          img={"/phy2.jpeg"}
          noCourse={3}
          level={"Intermediate"}
          topic={"Nuclear Physics"}
        />
        <TopicCard
          img={"/phy3.jpeg"}
          noCourse={3}
          level={"Intermediate"}
          topic={"Atomic Physics"}
        />
        <TopicCard
          img={"/phy4.jpeg"}
          noCourse={3}
          level={"Intermediate"}
          topic={"Thermodynamics"}
        />
        <TopicCard
          img={"/phy5.png"}
          noCourse={3}
          level={"Intermediate"}
          topic={"Mechanics"}
        />
      </div>
    </div>
  );
};

export default page;
