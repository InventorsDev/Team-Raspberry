"use client";
import Link from "next/link";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Page = () => {
  // const [show, setShow] = useState(false);
  const [word, setWord] = useState({
    wordUnderConsideration: "",
    synonyms: "",
    antonyms: "",
    define: "",
    wikipedia: "",
  });
  const [showWord, setShowWord] = useState("");

  const makeApiRequest = async (command) => {
    try {
      const response = await axios.post(
        `https://unicdata.pythonanywhere.com/chatbot/`,
        {
          command,
          input_data: word.wordUnderConsideration,
        }
      );
     console.log(response.data);
      return response.data.response;
    } catch (error) {
      console.error(`Error fetching ${command} data:`, error);
      return null; // Return null on error
    }
  };

  const search = async () => {
    const commands = ["define", "synonyms", "antonyms", "wikipedia"];

    const results = await Promise.all(
      commands.map(async (command) => {
        const responseData = await makeApiRequest(command);
        return { [command]: responseData };
      })
    );

    const combinedData = results.reduce((acc, result) => {
      return { ...acc, ...result };
    }, {});

    // Update the state with the combined data
    setWord({ ...word, ...combinedData });
    console.log({ ...word, ...combinedData });
    setShowWord(word.wordUnderConsideration);
  };

  return (
    <>
      {!showWord.length ? (
        <div className=" w-full h-screen bg-[#030303] flex flex-col items-center text-white justify-around">
          <div className=" flex gap-[40px] w-full items-center px-4">
            <Link href={"/dashboard"}>
            <Image width={40} height={40} src="/arrow-back-white.svg" alt="" />
            </Link>
            <p className=" bg-primaryButton text-transparent text-2xl bg-clip-text font-black">
              Science Dictionary
            </p>
          </div>

          <div className=" flex gap-3 w-full items-center justify-center px-3">
            <input
              type="text"
              className=" h-[60px] w-full bg-transparent border border-white outline-none p-4 rounded-full"
              placeholder=" Search words"
              onChange={(event) =>
                setWord({
                  ...word,
                  wordUnderConsideration: event.target.value,
                })
              }
              value={word.wordUnderConsideration}
            />
            <button className=" bg-primaryButton  p-3 rounded-[12px]">
            <Image width={20} height={20} src="/send.svg" alt="" className=" w-8" onClick={search} />
            </button>
          </div>
          <Image width={460} height={460} src="/bg-dic.svg" alt="" />
          <p>Nice to meet you! </p>
        </div>
      ) : (
        <div className=" w-full h-screen fixed inset-0 overflow-hidden  bg-[#191919] flex flex-col text-white p-4 items-start">
          <Link href={"/dashboard"}>
          <Image width={20} height={20}
              src="/arrow-back-white.svg"
              alt=""
              className="cursor-pointer"
              // onClick={() => setShow(false)}
            />
          </Link>
          <div className=" flex gap-3 w-full items-center py-5">
            <input
              type="text"
              className=" h-[50px] w-full bg-transparent border border-white outline-none p-4 rounded-full"
              placeholder=" Search words"
              onChange={(event) =>
                setWord({
                  ...word,
                  wordUnderConsideration: event.target.value,
                })
              }
              value={word.wordUnderConsideration}
            />
            <button className="   p-2 rounded-[12px]" onClick={search}>
            <Image width={20} height={20} src="/send.svg" alt="" className=" w-8" />
            </button>
          </div>
          <p className=" text-[32px] font-black pb-6 px-2">{showWord}</p>
          <div className=" flex gap-4 w-full">
            <div className=" bg-primaryButton rounded-lg w-1/2 p-2 flex flex-col ">
              <p className=" text-sm text-[#f5f5f5]">synonyms</p>
              <p className=" text-[18px] font-bold">{word.synonyms}</p>
            </div>
            <div className=" bg-primaryButton rounded-lg w-1/2 p-2 flex flex-col ">
              <p className=" text-sm text-[#f5f5f5]">antonyms</p>
              <p className=" text-[18px] font-bold">{word.antonyms}</p>
            </div>
          </div>
          <p className=" pt-8 text-sm">define</p>
          <p>{word.define}</p>
          <p className=" pt-8 text-sm">Wikipedia</p>
          <p>{word.wikipedia}</p>
        </div>
      )}
    </>
  );
};

export default Page;
