"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [screen, setScreen] = useState(0);
  const data = [
    {
      img: "/screen1.svg",
      title: "Learn Anytime, Anywhere",
      text: "Enjoy the captivating process of online education in a place & at a time of your choice, Comfort and Convenience.",
    },
    {
      img: "/screen2.svg",
      title: "Have Access To Everything",
      text: "Unlock a world of knowledge and gain seamless access to everything you need for your educational journey.",
    },
    {
      img: "/screen3.svg",
      title: "Thousand Of Course Activities",
      text: "Discover a world of educational opportunities through our diverse selection of a thousand courses designed to enhance your learning experience.",
    },
  ];

  const handleClick = () => {
    if (screen === 2) {
      router.push("/signup");
    }
    setScreen(screen + 1);
  };
  return (
    <div className="bg-primaryBg h-screen flex flex-col items-center pt-[50px] justify-between text-white">
      <Link
        href={"/signup"}
        className=" text-end w-full px-[30px] font-semibold"
      >
        <p>skip</p>
      </Link>
      <img
        src={data[screen < 3 ? screen : 0].img}
        alt=""
        className=" w-[420px] h-[370px]"
      />
      <div className=" flex flex-col gap-[30px] items-center bg-accent-1 w-full py-[38px] px-[24px] rounded-t-[24px]">
        <div className=" flex h-2 gap-1.5 justify-center">
          {["", "", ""].map((_, i) => (
            <div
              className={` w-[22px]  rounded-full ${
                screen == i ? " bg-primary-green" : "bg-white"
              }`}
              onClick={() => setScreen(i)}
            />
          ))}
        </div>
        <p className=" font-bold text-center text-3xl font-montserrat">
          {data[screen < 3 ? screen : 0].title}
        </p>
        <p className=" font-semibold text-center text-sm">
          {data[screen < 3 ? screen : 0].text}
        </p>
        <button onClick={handleClick}>
          {screen < 2 ? (
            <div className=" bg-white grid place-items-center w-[60px] h-[60px] rounded-full ">
              <img src="/forward-arrow.svg" alt="" />
            </div>
          ) : (
            <div className=" p-3 bg-primaryButton rounded-full">
              GET STARTED
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
