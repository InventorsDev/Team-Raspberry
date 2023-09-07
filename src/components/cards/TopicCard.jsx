import Link from "next/link";
import React, { useContext } from "react";
import Image from "next/image";
import MyContext from "../../context/context";

const TopicCard = ({ img, noCourse, level, topic,link}) => {
  const { setCourseID } = useContext(MyContext);
      setCourseID(link)
  return (
    <div onClick={()=>  setCourseID(link)} className=" ">
      
      <Link className="w-fit" href={"/courses/" + link}>
        <div className=" w-[190px]  overflow-hidden flex flex-col gap-1 hover:shadow-2xl pb-4 rounded-b-lg hover:shadow-[#1733792a] transition-all duration-300">
          <div className=" relative flex items-center justify-center w-full h-[120px] overflow-hidden rounded-[10px] z-10">
            <Image
              style={{
                objectFit: "cover",
                zIndex: 0,
              }}
              src={img}
              fill
              alt=""
            />
          </div>
          <div className=" flex justify-between px-2">
            <p className=" text-[#8C8989] text-sm capitalize">{level}</p>
            {/* <p className=" text-[#8C8989] text-sm">
              {noCourse} {noCourse && "videos"}
            </p> */}
          </div>
          <p className=" px-2 text-sm capitalize h-[49px] py-2">{topic}</p>
        </div>
      </Link>
    </div>
  );
};

export default TopicCard;
