import React from "react";

const Edit = () => {
  return (
    <>
      <div className=" mt-[30px] flex gap-8 items-center">
        <img src="/profile-picture.svg" alt="" />
        <div>
          <p className=" text-[22px] font-semibold">John Doe</p>
          <p className=" text-sm">Example@gmail.com</p>
        </div>
      </div>
      <div className=" mt-[50px] flex flex-col gap-4">
        <div className=" bg-[#D9D9D980] h-[60px] w-full rounded-[16px] flex items-center px-[30px] font-medium">
          Level: Intermediate
        </div>
        <div className=" bg-[#D9D9D980] h-[60px] w-full rounded-[16px] flex items-center px-[30px] font-medium">
          DOB: 18-10-2025
        </div>
        <div className=" bg-[#D9D9D980] h-[60px] w-full rounded-[16px] flex items-center px-[30px] font-medium">
          Country: Nigeria
        </div>
        <div className=" bg-[#D9D9D980] h-[60px] w-full rounded-[16px] flex items-center px-[30px] font-medium">
          Gender: Female
        </div>
      </div>
    </>
  );
};

export default Edit;
