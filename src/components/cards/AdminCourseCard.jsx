import Image from "next/image";
import React from "react";

const AdminCourseCard = ({ img, topic, creator }) => {
  return (
    <div
      className={` flex flex-col py-2.5 px-3.5 bg-white shadow-2xl shadow-[#67949e3c] rounded-[20px] gap-2.5`}
    >
      <div className=" flex justify-between items-center">
        <p>{topic}</p>
        <p className=" text-sm">
          {creator && "By "} {creator}
        </p>
      </div>
      <Image width={50} height={50} src={img} alt="" className=" " />
      <div className=" flex justify-between items-center">
        <button className=" text-[#FFA927] font-bold text-sm">Modify</button>
        <button className=" text-[#EE4242] font-bold text-sm">Delete</button>
      </div>
    </div>
  );
};

export default AdminCourseCard;
