"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState();

  useEffect(() => {
    if (error) {
      if (error.error) {
        toast.error("invalid credentials");
      }
    }
  }, [error]);

  const handleLogin = (e) => {
    e.preventDefault();
    toast.error("invalid credentials");

    // axios
    //   .post("https://unique.pythonanywhere.com/login/", {
    //     username: username,
    //     password: password,
    //   })
    //   .then((res) => {
    //     // console.log(res.Object.response);
    //     console.log("Successful");
    //     router.push("/dashboard");
    //   })
    //   .catch((err) => {
    //     setError(err.response.data);
    //     console.log(err.response.data);
    //   });
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
                Username
              </p>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className=" w-full h-full bg-transparent outline-none px-3"
                placeholder="Enter Username"
              />
            </div>
            <div className=" border border-primary-green h-[60px] rounded-full p-2">
              <input
                type="password"
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
        <ToastContainer
          className=" mb-8"
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
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
