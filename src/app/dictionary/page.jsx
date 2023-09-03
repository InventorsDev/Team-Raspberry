"use client";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [show, setShow] = useState(false);
  const [word, setWord] = useState({
    word: "Awesome",
    synonyms: "wowed",
    antonyms: "unwowed",
    definition: "word from definition",
    wikipedia: "word from wiki baby",
  });
  return (
    <>
      {show ? (
        <div className=" w-full h-screen bg-[#030303] flex flex-col items-center text-white justify-around">
          <p className=" bg-primaryButton text-transparent text-[32px] bg-clip-text font-black">
            Science Dictionary
          </p>
          <div className=" flex gap-3 w-full items-center justify-center px-3">
            <input
              type="text"
              className=" h-[60px] w-full bg-transparent border border-white outline-none p-4 rounded-full"
              placeholder=" Search words"
            />
            <button className=" bg-primaryButton  p-3 rounded-[12px]">
              <img src="/send.svg" alt="" className=" w-8" />
            </button>
          </div>
          <img src="/bg-dic.svg" alt="" />
          <p>Nice to meet you! </p>
        </div>
      ) : (
        <div className=" w-full h-screen bg-[#030303] flex flex-col text-white p-4 items-start">
          <Link href={"/dashboard"}>
            <img
              src="/arrow-back-white.svg"
              alt=""
              className="cursor-pointer"
              onClick={() => setShow(false)}
            />
          </Link>
          <div className=" flex gap-3 w-full items-center py-5">
            <input
              type="text"
              className=" h-[50px] w-full bg-transparent border border-white outline-none p-4 rounded-full"
              placeholder=" Search words"
            />
            <button className="   p-2 rounded-[12px]">
              <img src="/send.svg" alt="" className=" w-8" />
            </button>
          </div>
          <p className=" text-[32px] font-black pb-6 px-2">{word.word}</p>
          <div className=" flex gap-4">
            <div className=" bg-primaryButton rounded-lg w-1/2 p-2 flex flex-col ">
              <p className=" text-sm text-[#f5f5f5]">synonyms</p>
              <p className=" text-[30px] font-bold">{word.synonyms}</p>
            </div>
            <div className=" bg-primaryButton rounded-lg w-1/2 p-2 flex flex-col ">
              <p className=" text-sm text-[#f5f5f5]">antonyms</p>
              <p className=" text-[30px] font-bold">{word.antonyms}</p>
            </div>
          </div>
          <p className=" pt-8 text-sm">Definition</p>
          <p>{word.definition}</p>
          <p className=" pt-8 text-sm">Wikipedia</p>
          <p>{word.wikipedia}</p>
        </div>
      )}
    </>
  );
};

export default page;
