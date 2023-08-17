import React from "react";

const Save = () => {
  return (
    <>
      <div className=" mt-[30px] flex gap-8 items-center">
        <img src="/profile-picture.png" alt="" />
        <button className=" bg-[#37494E] px-6 py-2 rounded-full text-white">
          Change
        </button>
      </div>
      <div className=" mt-[50px] flex flex-col gap-7">
        <div className=" border border-primary-green h-[60px] rounded-full p-2">
          <p className=" bg-white w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm font-extralight whitespace-nowrap">
            Name
          </p>
          <input
            required
            className=" w-full h-full bg-transparent outline-none px-3"
          />
        </div>
        <div className=" border border-primary-green h-[60px] rounded-full p-2">
          <p className=" bg-white w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm font-extralight whitespace-nowrap">
            Email
          </p>
          <input
            required
            className=" w-full h-full bg-transparent outline-none px-3"
          />
        </div>
        <div className=" border border-primary-green h-[60px] rounded-full p-2">
          <p className=" bg-white w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm font-extralight whitespace-nowrap">
            DOB
          </p>
          <input
            required
            className=" w-full h-full bg-transparent outline-none px-3"
          />
        </div>
      </div>
    </>
  );
};

export default Save;
