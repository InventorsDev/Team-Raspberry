"use client";
import Screen1 from "@/components/signup/Screen1";
import Screen2 from "@/components/signup/Screen2";
import Screen3 from "@/components/signup/Screen3";
import Screen4 from "@/components/signup/Screen4";
import Screen5 from "@/components/signup/Screen5";
import Screen6 from "@/components/signup/Screen6";
import Success from "@/components/signup/Success";
import { useState } from "react";

export default function Home() {
  const [screen, setScreen] = useState("screen_1");

  let currentScreen;
  switch (screen) {
    case "screen_1":
      currentScreen = <Screen1 screen={screen} setScreen={setScreen} />;
      break;

    case "screen_2":
      currentScreen = <Screen2 screen={screen} setScreen={setScreen} />;
      break;

    case "screen_3":
      currentScreen = <Screen3 screen={screen} setScreen={setScreen} />;
      break;

    case "screen_4":
      currentScreen = <Screen4 screen={screen} setScreen={setScreen} />;
      break;

    case "screen_5":
      currentScreen = <Screen5 screen={screen} setScreen={setScreen} />;
      break;

    case "screen_6":
      currentScreen = <Screen6 screen={screen} setScreen={setScreen} />;
      break;

    case "success":
      currentScreen = <Success screen={screen} setScreen={setScreen} />;
      break;

    default:
      currentScreen = <Screen1 screen={screen} setScreen={setScreen} />;
      break;
  }
  return (
    <div className=" flex justify-center">
      <div className=" h-screen flex flex-col py-[40px] px-4 justify-between max-w-[600px] w-full">
        {currentScreen}
      </div>
    </div>
  );
}
