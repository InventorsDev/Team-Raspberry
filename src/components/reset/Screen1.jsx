import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

const Screen1 = ({ setScreen }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "https://unique.pythonanywhere.com/send-reset-password-link/",
        {
          email: email,
        }
      );
      console.log("Successful");
      setScreen("screen_2");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className=" flex flex-col gap-12">
        <div className=" flex gap-[60px]">
          <Link href={"/login"}>
            <Image height={40} width={40} src="/arrow-back.svg" alt="" />
          </Link>
          <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
            Reset Password
          </p>
        </div>
        <div className=" flex gap-5 flex-col">
          <p className=" font-semibold text-[22px]"> Reset Password</p>
          <p>Enter your email to get a reset link sent to you</p>
        </div>
        <input
          type="text"
          className="  h-[60px] rounded-full border border-primary-green outline-none px-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="example@gmail.com"
        />
        <button
          className=" bg-primaryButton h-[60px] rounded-full text-white font-semibold text-lg w-full"
          onClick={handleSubmit}
        >
          Send reset email
        </button>
      </div>
    </>
  );
};

export default Screen1;
