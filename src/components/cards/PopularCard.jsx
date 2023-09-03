import React from "react";
import image from "../../../public/mmd.jpeg"
import Image from "next/image";
const PopularCard = ({ img, course, topic }) => {
  return (
    <div className=" min-w-[140px] h-[140px] overflow-hidden flex flex-col gap-1">
      <Image width={100} height={500} className=" bg-contain  w-full"   src={image} alt=''/>
      <p className=" text-[#8C8989] text-sm">{course.title}</p>
      <p>{topic}</p>
    </div>
  );
};

export default PopularCard;
