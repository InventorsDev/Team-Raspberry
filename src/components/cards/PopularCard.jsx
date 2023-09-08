import React, { useContext } from "react";
import image from "../../../public/mmd.jpeg"
import Image from "next/image";
import MyContext from "../../context/context";
import { Router, useRouter } from "next/router";
import Link from "next/link";
const PopularCard = ({ img, course, topic }) => {
  const { token,setToken,setPASS,PASS, setUser, user,courseID,setCourseID } = useContext(MyContext);
 
 
  // const onBook=(id)=>{
  //   if(id)router.push('/courses/'+id)
  // }

  return (
    <div   key={img.id}  className=" min-w-[140px] h-[160px] overflow-hidden flex flex-col gap-1">


      {/* <Link  href={'/courses/'+courseID}> */}
       {img ?
     <Image  width={100} height={500} className=" bg-cover  h-[103px]  w-full"   src={img.cover_image} alt='e'/>
      :
<Image width={105} height={140} className="    h-[140px] w-[105]"   src={image} alt=''/>

    }
      
      <p className=" text-[#8C8989] text-sm">{course.title}</p>
      <p className=" text-center">{topic}</p>
      {/* </Link> */}
     
    </div>
  );
};

export default PopularCard;
