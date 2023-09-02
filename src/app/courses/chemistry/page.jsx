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
          Chemistry
        </p>
      </div>
      <div className=" w-full p-3 bg-[#8498CBB2] flex items-center gap-2.5 rounded-[20px] shadow-2xl shadow-[#17337962]">
        <img src="/chem-icon.svg" alt="" className=" w-[15ƒ0px]" />
        <div className=" flex flex-col gap-5">
          <p className=" text-white font-bold">
            The branch of science concerned with the substances of which matter
            is composed.
          </p>
          <p className=" text-sm text-[#173379] font-bold">5 topics</p>
        </div>
      </div>
      <div className=" grid   grid-cols-2 w-full  gap-6 mt-8">
        <TopicCard
          img={"/chem2.jpeg"}
          noCourse={3}
          level={"Intermediate"}
          topic={"Organic chemistry"}
        />
        <TopicCard
          img={"/chem1.jpeg"}
          noCourse={3}
          level={"Intermediate"}
          topic={"Nuclear chemistry"}
        />
        <TopicCard
          img={"/chem4.jpeg"}
          noCourse={3}
          level={"Intermediate"}
          topic={"Chemical Kinetics"}
        />
        <TopicCard
          img={"/chem3.jpeg"}
          noCourse={3}
          level={"Intermediate"}
          topic={"Organic Chemistry"}
        />
        <TopicCard
          img={"/chem5.jpeg"}
          noCourse={3}
          level={"Intermediate"}
          topic={"Inorganic chemistry"}
        />
       
      </div>
    </div>
  );
};

export default page;
