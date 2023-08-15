"use client";

import Screen1 from "../../components/reset/Screen1";
import Screen2 from "../../components/reset/Screen2";
import React, { useState } from "react";

const page = () => {
  const [screen, setScreen] = useState("screen_1");

  let currentScreen;
  switch (screen) {
    case "screen_1":
      currentScreen = <Screen1 setScreen={setScreen} />;
      break;

    case "screen_2":
      currentScreen = <Screen2 setScreen={setScreen} />;
      break;

    default:
      currentScreen = <Screen1 />;
      break;
  }
  return (
    <div className=" h-screen flex flex-col py-[40px] px-4 justify-between max-w-[600px] w-full">
      {currentScreen}
    </div>
  );
};

export default page;
