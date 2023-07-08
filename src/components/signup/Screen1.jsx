import React from "react";

const Screen1 = () => {
  return (
    <div className=" h-screen flex flex-col gap-[130px] max-w-[600px] w-full">
      <div className=" flex flex-col gap-7 pt-[20px]">
        <p className="font-bold font-montserrat text-lg">Welcome to</p>
        <p className="font-bold font-montserrat text-4xl">LearnVerse</p>
      </div>
      <div className=" flex flex-col gap-7 pb-[20px]">
        <p className=" font-semibold">Verify your mobile number to continue</p>
        <input
          type="text"
          className=" w-full h-[60px] rounded-full px-4 outline-none border border-[#F95DA0]"
        />
        <button className="bg-gradient-to-l from-pink-500 to-indigo-600 h-[60px] rounded-full text-white font-semibold text-lg">
          Get OTP
        </button>
      </div>
    </div>
  );
};

export default Screen1;
