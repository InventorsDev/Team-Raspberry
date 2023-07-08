import Screen1 from "@/components/reset/Screen1";
import Screen2 from "@/components/reset/Screen2";
import React from "react";

const page = () => {
  return (
    <div className=" h-screen flex flex-col py-[40px] px-4 justify-between max-w-[600px] w-full">
      <Screen2 />
    </div>
  );
};

export default page;
