'use client'
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import CourseCard from "../../components/cards/CourseCard";
import PopularCard from "../../components/cards/PopularCard";
import OngoingCard from "../../components/cards/OngoingCard";
import Navbar from "../../components/nav/Navbar";
import MyContext from "../../context/context";
import { useRouter } from "next/navigation";
import InvalidAuth from "../../components/invalidAuth/InvalidAuth";
import axios from "axios";
import Cookies from 'js-cookie';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineUser } from "react-icons/ai";
import {  FaUserCircle } from "react-icons/fa";


const page = () => {
  const { token,setToken,setPASS,PASS, setUser,courseID,setCourseID,setProfileImage,profileImage, user } = useContext(MyContext);
  const router = useRouter();

 
      const cokkieToken = Cookies.get('token'); 
      const[popularCoursses,setPopularCourses]=useState([])



  if (cokkieToken === '') {
    return (<InvalidAuth />)
    
    
   }
   else{

    useEffect(() => { 
      
        setToken(cokkieToken)
      if (token) {
        const config = {
          headers: {
            Authorization: `Token ${token}`,
          },
        };
     
        axios
          .get('https://unicdata.pythonanywhere.com/profile/', config)
          .then((res) => {
            // Handle successful response here
            console.log(res.data);
            setUser({ ...user, ...res.data });
            setToken(token); // Set the token here
          })
          .catch((err) => {
            toast.error('Invalid credentials try again')
            console.log(err);
          });
        axios
          .get('https://unicdata.pythonanywhere.com/videos/', config)
          .then((res) => {
            // Handle successful response here
            console.log(res.data);
            setPopularCourses(res.data)
          
            setToken(token); // Set the token here
          })
          .catch((err) => {
            toast.error('Invalid credentials try again')
            console.log(err);
          });



      }
    }, [token]);
  

  return (
    <div className="py-6 flex flex-col gap-3 pb-32">
       <ToastContainer
          className=" mb-8"
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      <div className="flex justify-between items-center px-4">
        <p className="font-bold">
  
          Hi! {user.username}
          
           </p>
 
           {user.profile_picture ?
           <img className="w-[10vw] rounded-full h-[5vh]  " src={user?.profile_picture} alt="" /> 
           :
  <FaUserCircle size={40}/>
      }
      </div>
      <p className="px-4">Unlock your learning potential today!</p>
      <div className="flex pt-3 gap-4 justify-between px-4">
        <input
          type="text"
          className="border border-[#67949E] rounded-lg h-10 w-full outline-none px-3"
        />
        <button className="w-10 h-10 bg-[#67949E] rounded-lg flex items-center justify-center">
          <img src="/filter.svg" alt="" />
        </button>
      </div>
      <p className="font-bold my-4 px-4">Course Categories</p>
      <div className="flex items-start justify-between px-4">
        <div className="flex flex-col items-start justify-between gap-16">
          <Link href="/courses/biology">
            <CourseCard img="/biology-icon.svg" subject="Biology" noCourses={5} />
          </Link>
          <Link href="/courses/physics">
            <CourseCard img="/physics.svg" subject="Physics" noCourses={5} />
          </Link>
        </div>
        <div className="flex flex-col items-start justify-between gap-16 mt-16">
          <Link href="/courses/chemistry">
            <CourseCard img="/chem-icon.svg" subject="Chemistry" noCourses={5} />
          </Link>
          <Link href="/courses/geology">
            <CourseCard img="/geology.svg" subject="Geology" noCourses={5} />
          </Link>
          <Link href="/courses/ict">
            <CourseCard img="/ict1.jpeg" subject="ICT" noCourses={5} />
          </Link>
        </div>
      </div>
      <p className="font-bold my-4 px-4">Popular Topics</p>
      <div className="flex w-full overflow-y-scroll gap-4 px-4">
        {/* <PopularCard img="/bio3.jpeg" course="Biology" topic="Cells" /> */}
        {popularCoursses.filter((course)=> course.creator_id!==user.id).map(course=>(<>
         <PopularCard img={course} course={course.title} topic={course.title} />
        </>))}
      
      </div>
      {/* <OngoingCard /> */}
      <Navbar />
    </div>
  );
};
};

export default page;
