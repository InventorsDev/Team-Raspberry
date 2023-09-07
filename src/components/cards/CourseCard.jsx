import React, { useContext } from "react";
import MyContext from "../../context/context";
import Image from "next/image";

const CourseCard = ({ img, subject, noCourses }) => {
  const {token,setToken,setUser,user} = useContext(MyContext);
  // setUser({...user,courseTitle:subject})
 
  return (
    <div
      className={` w-[190px] max-w-full flex flex-col pb-4 bg-white shadow-2xl shadow-[#67949e3c] rounded-b-[20px] items-center`}
    >
   <Image width={100} height={100} src={img} alt="" className=" " />
      <p className=" font-bold pt-3">
        {subject}
        </p>
      <p>
        {/* {noCourses} {noCourses && "topics"} */}
      </p>
    </div>
  );
};

export default CourseCard;
