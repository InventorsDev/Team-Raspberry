import React from "react";

const Success = () => {
  return (
    <div className=" flex w-full h-full justify-center items-center flex-col gap-[30px]">
      <img src="/white-checkmark.svg" alt="" />
      <div className=" flex flex-col gap-4">
        <p className=" font-semibold text-[22px] text-center">Success</p>
        <p className=" text-center w-[285px] font-medium">
          YAY! your account has been created successfully.
        </p>
      </div>
      <button className="bg-gradient-to-l from-pink-500 to-indigo-600 h-[60px] rounded-full text-white font-semibold text-lg w-full">
        Continue
      </button>
    </div>
  );
};

export default Success;
