import Link from "next/link";
import React from "react";

const TutorsCard = () => {
  return (
    <Link href={"/courses/435490"}>
      <div className=" shadow-2xl shadow-[#1733792a] bg-white w-full p-4 flex flex-col gap-2 rounded-[20px] border border-[#37494e8b]">
        <div className=" flex justify-between items-center">
          <p className=" font-bold">Video Title</p>
          <p className=" text-[#3CBD6B]">Approved</p>
        </div>
        <p className=" text-sm text-[#7a7a7a]">5 min ago</p>
        <p className=" text-[15px]">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
          dolor
        </p>
        <img src="/pic-1.png" alt="" />
      </div>
    </Link>
  );
};

export default TutorsCard;
