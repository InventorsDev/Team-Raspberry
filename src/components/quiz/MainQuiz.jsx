"use client";
import React, { useState } from "react";
import EndScreen from "./EndScreen";

const MainQuiz = () => {
  const [showEnd, setShowEnd] = useState(false);
  const [number, setNumber] = useState(0);
  const questions = [
    {
      question: "what is a cell?",
      answer: [
        "Smallest unit of life",
        "smallest unit of life",
        "CSmallest unit of life",
        "Smallest unit of lifeD",
      ],
    },
    { question: "what is the first letter?", answer: ["A", "B", "C", "D"] },
    { question: "what is the first number?", answer: ["1", "2", "3", "4"] },
  ];
  const length = ((number + 1) / questions.length) * 100;

  const forwardButton = () => {
    if (number + 1 === questions.length) {
      setShowEnd(true);
    } else {
      setNumber(number + 1);
    }
  };
  console.log(length);
  console.log(number, questions.length);
  return (
    <>
      {showEnd ? (
        <EndScreen />
      ) : (
        <>
          <div className=" flex justify-between items-center">
            <p className=" font-semibold">Pair of linear variables</p>
            <div className=" flex gap-2">
              <img src="/time-black.svg" alt="" />
              <p className=" font-semibold">5:00</p>
            </div>
          </div>
          {/* meter for measuring quiz progress */}
          <div className=" w-full h-1 bg-[#37494e5f] rounded-sm">
            <div
              className={` h-full bg-[#37494E] w-[calc(((number+1)/(questions.length))*100%)] rounded-full`}
            ></div>
          </div>
          <div>
            <p>Q.{number + 1}</p>
            <p className=" font-semibold">{questions[number].question}</p>
            <div className=" flex flex-col mt-4 w-full gap-4">
              {questions[number].answer.map((item, i) => (
                <div
                  className=" w-full p-4  shadow-[1px_4px_10px_0_rgba(103,148,158,0.20)] mb-4 rounded-[10px] cursor-pointer"
                  key={i}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          {number > 0 && (
            <button
              className=" border-[#67949E] border py-2.5 px-5 rounded-[10px] absolute bottom-4 left-4"
              onClick={() => setNumber(number - 1)}
            >
              Previous
            </button>
          )}
          <button
            className=" bg-[#67949E] text-white py-2.5 px-5 rounded-[10px] absolute bottom-4 right-4"
            onClick={() => forwardButton()}
          >
            {number + 1 === questions.length ? "Submit" : "Next"}
          </button>
        </>
      )}
    </>
  );
};

export default MainQuiz;
