import React from "react";

const CourseCard = ({ img, subject, noCourses }) => {
  return (
    <div
      className={` w-[190px] max-w-full flex flex-col pb-4 bg-white shadow-2xl shadow-[#67949e3c] rounded-b-[20px] items-center`}
    >
      <img src={img} alt="" className=" " />
      <p className=" font-bold pt-3">{subject}</p>
      <p>
        {noCourses} {noCourses && "topics"}
      </p>
    </div>
  );
};

export default CourseCard;
