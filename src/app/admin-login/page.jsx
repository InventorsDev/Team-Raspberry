'use client'
import Link from "next/link";
import MyContext from "../../context/context";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Page = () => {
  const { token, PASS, setPASS, setToken, setUser, user } =
  useContext(MyContext);
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const [error, setError] = useState();

  const handleLogin = async (e) => {

    e.preventDefault();
    await axios
      .post("https://unicdata.pythonanywhere.com/login/", {
        login: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        Cookies.set("token", res.data.token, { expires: 7 }); // Set an expiration if needed
        console.log(res.data.token);
        setPASS(res.data?.token);
        setToken(res.data?.token);
        if (token) {
          router.push("/dashboard");
        }

        console.log("Successful");
        toast.success("Successful");

        console.log(token);
      })
      .catch((err) => {
        setError(err?.response?.data);
        toast.error("Invalid Credentials!,Try again..");
        console.log(err?.response?.data);
      });
  };


  return (
    <div className=" flex flex-col justify-between h-screen py-[40px] px-4">
      <div className=" flex flex-col gap-12">
        <p className=" font-bold text-[28px]">LearnVerse</p>
        <span className=" text-[22px] font-bold">Admin Login</span>
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
              />
            </div>
            <div className=" border border-primary-green h-[60px] rounded-full p-2">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" w-full h-full 
                bg-transparent outline-none px-3"
                placeholder="Password"
              />
            </div>
          </div>
          <Link href={"/admin-dashboard"}>
            <div
              type="submit"
              className=" bg-primaryButton h-[60px] rounded-full text-white font-semibold text-lg w-full flex items-center justify-center"
            >
              Login
            </div>
          </Link>
        </form>
      </div>

      <div className=" flex justify-between text-primary-green">
        <Link href={"/"}>
          <p>Forgot password?</p>
        </Link>
      </div>
    </div>
  );
};

export default Page;
