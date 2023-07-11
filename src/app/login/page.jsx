"use client";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const page = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errror, setError] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://unique.pythonanywhere.com/signup/", {
        username: "heyad",
        first_name: "james",
        last_name: "brend",
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.Object.response);
        console.log("Successful");
      })
      .catch((error) => {
        console.log(error.response.data);
      });

    console.log(`
      USER:
      Email: ${email},
      Password: ${password}
    `);
  };

  return (
    <div className=" flex flex-col justify-between h-screen py-[40px] px-4">
      <div className=" flex flex-col gap-12">
        <p className=" font-bold text-[28px]">LearnVerse</p>
        <span className=" text-[22px]">
          <span className=" font-black">Login</span> <span>to account</span>
        </span>
        <form className="flex flex-col gap-8">
          <div className=" flex flex-col gap-8">
            <div className=" border border-primary-green h-[60px] rounded-full p-2">
              <p className=" bg-white w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm font-extralight">
                Email
              </p>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" w-full h-full bg-transparent outline-none px-3"
                placeholder="Example@gmail.com"
              />
            </div>
            <div className=" border border-primary-green h-[60px] rounded-full p-2">
              <input
                type="text"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" w-full h-full bg-transparent outline-none px-3"
                placeholder="Enter password"
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={(e) => handleLogin(e)}
            className=" bg-primaryButton h-[60px] rounded-full text-white font-semibold text-lg w-full"
          >
            Login
          </button>
          <button
            type="submit"
            onClick={(e) => handleLogin(e)}
            className=" border border-primary-green text-[17px] h-[60px] rounded-full text-[#34343480] font-semibold text-lg w-full"
          >
            Login with Face ID
          </button>
        </form>
        {/* <p className=" w-full text-center">OR</p> */}
      </div>

      <div className=" flex justify-between text-primary-green">
        <Link href={"/reset"}>
          <p>Forgot password?</p>
        </Link>
        <Link href={"/signup"}>
          <p>Create an account</p>
        </Link>
      </div>
    </div>
  );
};

export default page;
