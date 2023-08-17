import React from "react";

const PopularCard = ({ img, course, topic }) => {
  return (
    <div className=" min-w-[140px] h-[140px] overflow-hidden flex flex-col gap-1">
      <img src={img} alt="" className=" rounded-lg" />
      <p className=" text-[#8C8989] text-sm">{course}</p>
      <p>{topic}</p>
    </div>
  );
};

export default PopularCard;
