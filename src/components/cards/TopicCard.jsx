import Link from "next/link";
import React from "react";

const TopicCard = ({ img, noCourse, level, topic }) => {
  return (
    <div className=" ">
      <Link className="w-fit" href={"/courses/"+topic}>
      <div className=" w-[190px] p-5  overflow-hidden flex flex-col gap-1 hover:shadow-2xl pb-4 rounded-b-lg hover:shadow-[#1733792a] transition-all duration-300">
        <img src={img}  alt="" className=" h-[15em] w-[15em]  rounded-lg" />
        <div className=" flex justify-between px-2">
          <p className=" text-[#8C8989] text-sm capitalize">{level}</p>
          <p className=" text-[#8C8989] text-sm">
            {noCourse} {noCourse && "videos"}
          </p>
        </div>
        <p className=" px-2 text-sm capitalize">{topic}</p>
      </div>
    </Link>
    </div>
    
  );
};

export default TopicCard;
