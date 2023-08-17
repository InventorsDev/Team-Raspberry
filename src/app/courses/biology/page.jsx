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
          Biology
        </p>
      </div>
      <div className=" w-full p-3 bg-[#8498CBB2] flex items-center gap-2.5 rounded-[20px] shadow-2xl shadow-[#17337962]">
        <img src="/biology-icon.svg" alt="" className=" w-[15ƒ0px]" />
        <div className=" flex flex-col gap-5">
          <p className=" text-white font-bold">
            The branch of science concerned with the substances of which matter
            is composed.
          </p>
          <p className=" text-sm text-[#173379] font-bold">5 topics</p>
        </div>
      </div>
      <div className=" flex flex-wrap justify-between gap-6 mt-8">
        <TopicCard
          img={"/pic-1.png"}
          noCourse={3}
          level={"Intermediate"}
          topic={"Atoms and why they are important"}
        />
        <TopicCard
          img={"/pic-1.png"}
          noCourse={3}
          level={"Intermediate"}
          topic={"Atoms and why they are important"}
        />
      </div>
    </div>
  );
};

export default page;
