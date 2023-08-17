import React from "react";
import CourseCard from "../../components/cards/CourseCard";
import PopularCard from "../../components/cards/PopularCard";
import OngoingCard from "../../components/cards/OngoingCard";
import Navbar from "../../components/Navbar";
import Link from "next/link";

const page = () => {
  return (
    <div className=" py-6  flex flex-col gap-3 pb-32">
      <div className=" flex justify-between items-center px-4">
        <p className=" font-bold">Hi! Adams</p>
        <img src="/home-profile.png" width={40} alt="" />
      </div>
      <p className="px-4">Unlock your learning potential today!</p>
      <div className=" flex pt-3 gap-4 justify-between px-4">
        <input
          type="text"
          className=" border border-[#67949E] rounded-lg h-10 w-full outline-none px-3"
        />
        <button className=" w-10 h-10 bg-[#67949E] rounded-lg flex items-center justify-center">
          <img src="/filter.svg" alt="" />
        </button>
      </div>
      <p className=" font-bold my-4 px-4">Course Categories</p>
      <div className=" flex items-start justify-between px-4">
        <div className=" flex flex-col items-start justify-between gap-16">
          <Link href={"/courses/biology"}>
            <CourseCard
              img={"/biology-icon.svg"}
              subject={"Biology"}
              noCourses={3}
            />
          </Link>
          <Link href={"/courses/physics"}>
            <CourseCard
              img={"/physics.svg"}
              subject={"Physics"}
              noCourses={3}
            />
          </Link>
        </div>
        <div className=" flex flex-col items-start justify-between gap-16 mt-16">
          <Link href={"/courses/chemistry"}>
            <CourseCard
              img={"/chem-icon.svg"}
              subject={"Chemistry"}
              noCourses={3}
            />
          </Link>
          <Link href={"/courses/geology"}>
            <CourseCard
              img={"/geology.svg"}
              subject={"Geology"}
              noCourses={3}
            />
          </Link>
        </div>
      </div>
      <p className=" font-bold my-4 px-4">Popular Topics</p>
      <div className=" flex w-full overflow-y-scroll gap-4 px-4">
        <PopularCard
          img={"/pic-1.png"}
          course={"chemistry"}
          topic={"programming"}
        />
        <PopularCard
          img={"/pic-2.png"}
          course={"chemistry"}
          topic={"chromatographydslsld"}
        />
        <PopularCard
          img={"/pic-1.png"}
          course={"chemistry"}
          topic={"programming"}
        />
        <PopularCard
          img={"/pic-1.png"}
          course={"chemistry"}
          topic={"programming"}
        />
        <PopularCard
          img={"/pic-1.png"}
          course={"chemistry"}
          topic={"programming"}
        />
      </div>
      <OngoingCard />
      <Navbar />
    </div>
  );
};

export default page;
