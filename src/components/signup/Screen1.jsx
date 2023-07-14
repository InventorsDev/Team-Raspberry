"use client";
import Link from "next/link";
import { useState } from "react";

const FirstScreen = ({
  screen,
  setScreen,
  fullname,
  email,
  password,
  setFullname,
  setEmail,
  setPassword,
}) => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const validEmail = email && email.match(isValidEmail);

  const [confirmPassword, setConfirmPassword] = useState("");
  const isPasswordMatch =
    (password === confirmPassword) & (password?.length >= 8);
  const isSubmitDisabled = !isPasswordMatch;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isPasswordMatch && validEmail && fullname.length) {
      setScreen("screen_2");
      console.log("Passwords match");
    } else {
      console.log("Passwords do not match");
    }
  };

  return (
    <>
      <form className=" flex flex-col gap-9" onSubmit={handleSubmit}>
        <p className="font-bold font-montserrat text-[22px] text-center">
          Sign-up
        </p>
        <div>
          <p className=" font-black text-xl pb-1">Welcome to Learn-verse!</p>
          <p>Let's get you started!</p>
        </div>
        <div className=" flex flex-col gap-6">
          <div className=" border border-primary-green h-[60px] rounded-full p-2">
            <p className=" bg-white w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm font-extralight whitespace-nowrap">
              Full Name
            </p>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
              className=" w-full h-full bg-transparent outline-none px-3"
              placeholder="full name"
            />
          </div>
          <div
            className={`${
              validEmail ? "border-primary-green" : "border-pink-700"
            } border h-[60px] rounded-full p-2 `}
          >
            <p className=" bg-white w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm font-extralight">
              Email
            </p>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={` w-full h-full bg-transparent outline-none px-3`}
              placeholder="example@gmail.com"
            />
          </div>
          <div className=" border border-primary-green h-[60px] rounded-full p-2">
            <p className=" bg-white w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm font-extralight whitespace-nowrap">
              Password (8 chars)
            </p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className=" w-full h-full bg-transparent outline-none px-3"
              placeholder="password"
            />
          </div>
          <div
            className={` border ${
              isPasswordMatch ? "border-primary-green" : "border-pink-700"
            } h-[60px] rounded-full p-2`}
          >
            <p className=" bg-white w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm font-extralight whitespace-nowrap">
              Confirm Password
            </p>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className=" w-full h-full bg-transparent outline-none px-3"
              placeholder="password"
            />
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <button
            className={`bg-primaryButton h-[60px] rounded-full text-white font-semibold text-lg w-full mt-3 ${
              isPasswordMatch && validEmail && fullname.length
                ? ""
                : " opacity-50 cursor-not-allowed"
            }`}
            disabled={isSubmitDisabled}
          >
            Continue
          </button>
          <p className="text-zinc-500 text-opacity-80 font-medium text-center">
            OR
          </p>
          <button
            className=" w-full flex justify-center gap-2 border-primary-green border rounded-full "
            type="submit"
          >
            <img src="/google.svg" alt="" />
            <p className=" text-sm font-medium py-1">Continue with Google</p>
          </button>
        </div>
      </form>
      <div className=" flex justify-center">
        <Link className="  text-primary-green" href={"/login"}>
          Login
        </Link>
      </div>
    </>
  );
};

export default FirstScreen;
