import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import MyContext from "../../context/context";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import axios from "axios";
import imgd from "../../../public/mmd.jpeg";
import Image from "next/image";
import {
  AiFillFilePdf,
  AiOutlineDownload,
  AiTwotoneFilePdf,
} from "react-icons/ai";
import InvalidAuth from "../invalidAuth/InvalidAuth";
const TutorsCard = () => {
  const {
    token,
    setToken,
    setPASS,
    PASS,
    setUser,
    setProfileImage,
    profileImage,
    user,
  } = useContext(MyContext);
  const router = useRouter();

  const cokkieToken = Cookies.get("token");
  const [popularCoursses, setPopularCourses] = useState([]);
    useEffect(() => {
  if (cokkieToken === "") {
    return <InvalidAuth />;
  } else {

      setToken(cokkieToken);
      if (token) {
        const config = {
          headers: {
            Authorization: `Token ${token}`,
          },
        };

        axios
          .get("https://unicdata.pythonanywhere.com", config)
          .then((res) => {
            // Handle successful response here
            console.log(res.data);
            setUser({ ...user, ...res.data });
            setToken(token); // Set the token here
          })
          .catch((err) => {
            toast.error("Invalid credentials try again");
            console.log(err);
          });

        axios
          .get("https://unicdata.pythonanywhere.com/videos/", config)
          .then((res) => {
            // Handle successful response here
            console.log(res.data);
            setPopularCourses(res.data);

            setToken(token); // Set the token here
          })
          .catch((err) => {
            toast.error("Invalid credentials try again");
            console.log(err);
          });
      }
      }
    }, [token,cokkieToken,setToken,setUser,user]);
console.log(user?.gender);
console.log(
  popularCoursses
  .filter((course) => {
    if(course===user.id){
      return course
    }
  }
  )
  )
  console.log(popularCoursses);
  return (
    <>
   {popularCoursses.length > 0 && (
  popularCoursses
    .filter((course) => course?.creator_id === user.id).length > 0 ? (
      popularCoursses
        .filter((course) => course?.creator_id === user.id)
        .map((course) => (
          <Link key={course.id} href={`/courses/${course.id}`}>
            <div className="shadow-2xl shadow-[#1733792a] bg-white w-full p-4 flex flex-col gap-2 rounded-[20px] border border-[#37494e8b]">
              <div className="flex justify-between items-center">
                <p className="font-bold">{course.title}</p>
                <p className="text-[#3CBD6B]">Approved</p>
              </div>
              <p className="text-sm text-[#7a7a7a]">{course.creator_id} min ago</p>
              <p className="text-[15px]">{course.description}</p>
              {!course.cover_image ? (
                <Image src={imgd} className="rounded-xl" alt="courses" width={650} height={650} />
              ) : (
                <Image width={100} height={200} className="rounded-xl" src={course.cover_image} alt="" />
              )}
              {/* You can add the download section here */}
            </div>
          </Link>
        ))
    ) : (
      <p>You have no videos created.</p>
    )
)}

    </>
  
  );
};


export default TutorsCard;
