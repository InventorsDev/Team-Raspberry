"use client";
import React, { useState } from "react";
import StartScreen from "../../../../components/quiz/StartScreen";
import MainQuiz from "../../../../components/quiz/MainQuiz";
import Link from "next/link";

const page = () => {
  const [quiz, setQuiz] = useState(false);
  return (
    <div className=" pt-6  flex flex-col gap-6 px-4">
      <div className=" flex justify-between items-center ">
        <Link href={"/dashboard"}>
          <img src="/arrow-back.svg" alt="" />
        </Link>
        <p className=" font-semibold w-[70%] text-center text-lg absolute left-1/2 transform -translate-x-1/2">
          Assessment
        </p>
        <p className=" font-bold">Skip</p>
      </div>
      {quiz ? <MainQuiz /> : <StartScreen setQuiz={setQuiz} />}
    </div>
  );
};

export default page;
