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
      <div className=" w-full p-3 bg-[#8498CBB2]  items-center gap-2.5 rounded-[20px] shadow-2xl shadow-[#17337962]">
        <img src="/phy.jpeg" alt="" className=" w-full" />

        <div className=" flex flex-col gap-5">
          <br />
          <p className=" text-white font-bold">
          Physics is considered to be one of the primitive subjects and academic disciplines to be discovered. It encompasses the study of matter, its motion and behaviour along with energy and force. As a vast discipline, it intersects with many different subjects and disciplines such as biophysics and quantum chemistry. Physics very often defines a wide range of principles and methodologies studied by other areas of science. It also suggests new areas of research for other academic fields, even mathematics and philosophy.


          </p>
          <h2 className=" font-semibold">What are the Main Branches of Physics?
            <br /></h2>
            <p>Physics is constituted of many interdisciplinary subjects and branches for those interested in making a career in this field. Here are all branches of Physics:</p>
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
