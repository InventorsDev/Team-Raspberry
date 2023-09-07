"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";

const FinalScreen = ({
  screen,
  setScreen,
  username,
  setUserName,
  fullname,
  email,
  password,
  confirmPassword,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (error) {
      if (error.password) {
        toast.error("password field can not be empty");
        setScreen("screen_1");
      } else if (error.username) {
        toast.error("this username has been used by someone else");
      } else if (error.email) {
        toast.error("the email is invalid");
        setScreen("screen_1");
      }
    }
  }, [error,setScreen,]);

  const handleSubmit =async () => {
    // setLoading(true);

    // setUser({ username,
    //   setUserName,
    //   fullname,
    //   email})

    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     console.log(user);
        
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });
    




    if (username.length > 2) {
      axios
        .post("https://unicdata.pythonanywhere.com/student-register/", {
          ussername: username,
          email,
          first_name: fullname,
          last_name: fullname,
          password: password,
       
        })
        .then((res) => {
          console.log("Successful");
          toast.success("Successful");
          setScreen("success");
        })
        .catch((err) => {
          setError(err.response.data);
          toast.error("error!,Try again..");
          console.log(err.response.data);
        });
    }
  };

  return (
    <>
      <div className=" flex flex-col gap-12">
        <div className=" flex gap-[60px]">
          <button onClick={() => setScreen("screen_3")}>
                  
 <Image
 height={40}
 width={40}
        src="/arrow-back.svg" alt="" />
          </button>
          <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
            Create an account
          </p>
        </div>
        <div className=" flex gap-3 flex-col">
          <p className=" font-semibold text-[22px]">What should we call you</p>
          <p>Enter a unique username</p>
        </div>
        <div className=" border border-primary-green h-[60px] rounded-full p-2">
          <p className=" bg-white w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm font-extralight">
            Username
          </p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
            className=" w-full h-full bg-transparent outline-none px-3"
            placeholder="raspberry"
          />
        </div>

        <button
          className={`bg-primaryButton h-[60px] rounded-full text-white font-semibold text-lg w-full ${
            username?.length > 2 ? "" : " opacity-50 cursor-not-allowed"
          }`}
          onClick={handleSubmit}
        >
          {loading === true ? "Loading" : "Sign Up"}
        </button>
        <ToastContainer
          className=" mb-4"
          position="bottom-right"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <div className=" flex justify-center">
        <Link className="  text-primary-green" href={"/login"}>
          Login
        </Link>
      </div>
    </>
  );
};
export default FinalScreen;
