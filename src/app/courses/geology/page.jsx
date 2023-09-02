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
      <div className=" w-full p-3 bg-[#8498CBB2]  items-center gap-2.5 rounded-[20px] shadow-2xl shadow-[#17337962]">
        <img src="/geo.jpeg" alt="" className=" w-[15ƒ0px]" />
        <div className=" flex flex-col gap-5">
          <h1>What is Geology?</h1>
          <p className=" text-white leading-6 font-bold">

            ​​The word geology means 'Study of the Earth'.

            Also known as geoscience or earth science, Geology is the primary Earth science and looks at how the earth formed, its structure and composition, and the types of processes acting on it.

            Geology is concerned with the history of the earth over the course of its 4.5 billion year life. By studying the structures of the earth we can unlock its hidden past and anticipate its future.
          </p>
          <p className=" text-sm text-[#173379] font-bold">5 topics</p>
        </div>
      </div>
      <div className=" grid   grid-cols-2 w-full  gap-6 mt-8">
        <TopicCard
          img={"/geo1.jpeg"}
          noCourse={3}
          level={"Intermediate"}
          topic={"STRATIGRAPHY- How layering of rocks and strata are analyzed to measure geologic time"}
        />
        <TopicCard
          img={"/geo2.jpeg"}
          noCourse={3}
          level={"Intermediate"}
          topic={"PALEONTOLOGY - How organisms evolve and their interactions in their environment by studying fossil records often found in rocks."}
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
          topic={"GEOMORPHOLOGY - How landforms, physical features and geological structures on Earth were created and evolved."}
        />
        <TopicCard
          img={"/geo5.jpeg"}
          noCourse={3}
          level={"Intermediate"}
          topic={"GEOCHRONOLOGY  - How landforms, physical features and geological structures on Earth were created and evolved."}
        />
      </div>
    </div>
  );
};

export default page;
