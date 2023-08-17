import Link from "next/link";
import React from "react";

const Edit = ({ setScreen }) => {
  return (
    <>
      <div className=" mt-[30px] flex gap-8 items-center">
        <img src="/profile-picture.png" alt="" />
        <div>
          <p className=" text-[22px] font-semibold">John Doe</p>
          <p className=" text-sm">Example@gmail.com</p>
          <button
            className=" py-2 px-10 text-white font-bold mt-2 rounded-full bg-[#37494E]"
            onClick={() => setScreen("save")}
          >
            Edit
          </button>
        </div>
      </div>
      <div className=" mt-[70px] flex flex-col gap-4">
        <p className=" font-bold">Subscription Plan</p>
        <div className=" w-full flex bg-[#5E868E] p-5 rounded-[20px] text-white gap-2 items-start">
          <img src="/bullet.svg" alt="" className=" pt-1" />
          <div>
            <p className=" font-bold text-lg">Monthly</p>
            <p className=" text-sm text-[#C4C4C4]">
              Pay monthly, cancel at any time
            </p>
          </div>
          <p className=" font-semibold pl-4">N15,000</p>
        </div>
        <div className=" flex justify-end gap-3">
          <button className=" px-4 py-2 text-white rounded-full bg-[#EE4242]">
            Cancel
          </button>
          <Link href={"/subscribe"}>
            <div className=" px-4 py-2 text-white rounded-full bg-[#37494E]">
              Renew
            </div>
          </Link>
        </div>
        <div className=" mt-8">
          <p className=" font-bold">Courses Covered</p>
          <div className=" flex gap-6 items-center mt-4">
            <img src="/pie-chart.svg" alt="" />
            <p>You have covered 90% of the courses, good job!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
