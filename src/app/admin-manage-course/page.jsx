import React from "react";
import AdminNav from "../../components/nav/AdminNav";
import AdminCourseCard from "../../components/cards/AdminCourseCard";

const page = () => {
  return (
    <div className=" flex px-4  gap-5 flex-col py-20">
      <div className=" font-bold text-center bg-white fixed top-4  left-1/2 transform -translate-x-1/2 w-full">
        <p>Approved</p>
        <div className=" flex justify-between items-center mt-5 px-4">
          <button className=" font-bold">Chemistry</button>
          <button className=" font-bold">Physics</button>
          <button className=" font-bold">Biology</button>
          <button className=" font-bold">Geology</button>
        </div>
      </div>
      <div className=" flex flex-col gap-6 pt-5">
        <AdminCourseCard
          img={"/pic-1.png"}
          creator={"Daphene"}
          topic={"Cells"}
        />
      </div>
      <AdminNav />
    </div>
  );
};

export default page;
