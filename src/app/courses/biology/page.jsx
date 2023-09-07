'use client'
import React, { useEffect, useState } from "react";
import TopicCard from "../../../components/cards/TopicCard";
import Link from "next/link";
import axios from "axios";
import {  AiOutlineWarning } from "react-icons/ai";
import Image from "next/image";

const Page = () => {
  const [data,setData]=useState([])
  const [MAINcourse,setMAINCourse]=useState([])
  const [filtered,setFiltered]=useState([])
  const [coursesByCategory, setCoursesByCategory] = useState({});

  useEffect(()=>{

   
  
     axios.get('https://unicdata.pythonanywhere.com/categories/',
    ) .then((res) => {
      console.log(res.data);
      setData(res.data)

    })
    .catch((e) => {
      // toast.error("Try again..");
      console.log(e);
    });



     axios.get('https://unicdata.pythonanywhere.com/subcategories/',
    ) .then((res) => {
      setMAINCourse(res.data)
      console.log(res.data);

    })
    .catch((e) => {
      // toast.error("Try again..");
      console.log(e);
    });




  },[])

  useEffect(() => {
   
    
    // Filter courses based on the "ict" category
    const filteredCourses = data.filter(course => {
      // Check if there is any category in categories where course.id matches category.category
      return MAINcourse.some(category => category.name === 'biology' && category.category === course.id);
    });
    setFiltered(filteredCourses)
    console.log(filteredCourses);
  }, [MAINcourse,data]);








  return (
    <div className=" py-6  flex flex-col gap-6 px-4 ">
      <div className=" flex gap-[60px]">
        <Link href={"/dashboard"}>
        <Image width={20} height={20} src="/arrow-back.svg" alt="" />
        </Link>
        <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
          Biology
        </p>
      </div>
      <div className=" w-full p-3 bg-[#8498CBB2] flex items-center gap-2.5 rounded-[20px] shadow-2xl shadow-[#17337962]">
      <Image width={100} height={100} src="/chem-icon.svg" alt="" className=" w-[150px]" />
        <div className=" flex flex-col gap-5">
          <p className=" text-white font-bold">
            The branch of science concerned with the substances of which matter
            is composed.
          </p>
          {/* <p className=" text-sm text-[#173379] font-bold">5 topics</p> */}
        </div>
      </div>
      <div className="">
       
       {/* {MAINcourse? */}
     {filtered.length>0?
       <div className=" grid   grid-cols-2 w-full  gap-6 mt-8">
        <>
         {filtered.map((course,i)=>(
        <TopicCard
    
          key={i}
          link={course.id}
          img={"/chem.webp"}
          noCourse={3}
          level={"Intermediate"}
          topic={course.name}
         />
        ))}
       </>
       </div>
       :
       <div className=" flex justify-center items-center mt-5 text-red-700">
        
         <p className=" flex flex-col items-center justify-center gap-9"><AiOutlineWarning size={80}/>No courses on this yet, come back later</p>
       </div>

      
      }
       
      
      
      
      {/* (
         
      )):null */}

      
   
      {/* } */}
       


        {/* <TopicCard
          img={"/chem1.jpeg"}
          noCourse={3}
          level={"Intermediate"}
          topic={"Nuclear chemistry"}
        />
        <TopicCard
          img={"/chem4.jpeg"}
          noCourse={3}
          level={"Intermediate"}
          topic={"Chemical Kinetics"}
        />
        <TopicCard
          img={"/chem3.jpeg"}
          noCourse={3}
          level={"Intermediate"}
          topic={"Organic Chemistry"}
        />
        <TopicCard
          img={"/chem5.jpeg"}
          noCourse={3}
          level={"Intermediate"}
          topic={"Inorganic chemistry"}
        /> */}
       
      </div>
    </div>
  );
};

export default Page;
