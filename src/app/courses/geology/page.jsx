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
          Geology
        </p>
      </div>
      <div className=" w-full p-3 bg-[#318644a5] flex items-center gap-2.5 rounded-[20px] shadow-2xl shadow-[#17337962]">
        <img src="/geology.svg" alt="" className=" w-[150px]" />
        <div className=" flex flex-col gap-5">
          <p className=" text-white font-bold">
            The branch of science that deals with the history of the earth as
            recorded in rocks is composed.
          </p>
          <p className=" text-sm text-[#173379] font-bold">5 topics</p>
        </div>
      </div>
      <div className=" grid   grid-cols-2 w-full  gap-6 mt-8">
        <TopicCard
          img={"/geo1.jpeg"}
          noCourse={3}
          level={"Intermediate"}
          topic={
            "STRATIGRAPHY- How layering of rocks and strata are analyzed to measure geologic time"
          }
        />
        <TopicCard
          img={"/geo2.jpeg"}
          noCourse={3}
          level={"Intermediate"}
          topic={
            "PALEONTOLOGY - How organisms evolve and their interactions in their environment by studying fossil records often found in rocks."
          }
        />
        <TopicCard
          img={"/geo3.webp"}
          noCourse={3}
          level={"Intermediate"}
          topic={"MICROPALEONTOLOGY - How microfossils are characterized"}
        />
        <TopicCard
          img={"/geo4.jpeg"}
          noCourse={3}
          level={"Intermediate"}
          topic={
            "GEOMORPHOLOGY - How landforms, physical features and geological structures on Earth were created and evolved."
          }
        />
        <TopicCard
          img={"/geo5.jpeg"}
          noCourse={3}
          level={"Intermediate"}
          topic={
            "GEOCHRONOLOGY  - How landforms, physical features and geological structures on Earth were created and evolved."
          }
        />
      </div>
    </div>
  );
};

export default page;
