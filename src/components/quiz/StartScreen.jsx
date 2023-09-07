import Image from "next/image";
import React from "react";

const startScreen = ({setQuiz}) => {
  return (
    <>
         
 <Image 
 height={20}
 width={20}
        src="/cells.jpg" alt="" className=" rounded-xl" />
      <p className=" font-bold">Topic: Atoms and why they are important</p>
      <div className=" flex gap-6">
        <p className=" font-bold">20 Questions</p>
        <div className=" flex gap-1 items-center">
      
 <Image
 height={20}
 width={20}
        src="/time-black.svg" alt="" />
          <p className=" font-bold">5:00</p>
        </div>
      </div>
      <p className=" font-bold">Instructions</p>
      <p className=" text-sm leading-6 mt-[-10px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
      <button className=" fixed bottom-10 bg-white shadow-xl px-8 py-2.5 text-[#67949E] rounded-xl text-lg left-1/2 transform -translate-x-1/2 shadow-[#2b2b2b4f]" onClick={()=>setQuiz(true)}>
        Start
      </button>
    </>
  );
};

export default startScreen;
