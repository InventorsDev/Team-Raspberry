"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase"
import withAuth from "../../components/withAuth/withAuth";
import MyContext from "../../context/context";
import Cookies from 'js-cookie';

const page = () => {
  const router = useRouter();
 const {token,PASS,setPASS,setToken,setUser,user} = useContext(MyContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState();
 
  useEffect(() => {
    if (error) {
      if (error.error) {
        toast.error("invalid credentials");
      }
    }
  }, [error]);

  const handleLogin = async(e) => {
    e.preventDefault();
   await axios
      .post("https://unicdata.pythonanywhere.com/login/", {
        login: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data); 
        Cookies.set('token', res.data.token, { expires: 7 }); // Set an expiration if needed
        console.log(res.data.token);  
        setPASS(res.data?.token)
        setToken(res.data?.token)
         if(token){
          router.push('/dashboard')
         }
       
        console.log("Successful");
        toast.success("Successful");

         console.log(token); 

  })
      .catch((err) => {
        setError(err.response.data);
        toast.error("Invalid Credentials!,Try again..");
        console.log(err.response.data);
      });
    
  };

useEffect(() => {
  // Check if the token is available
  if (token) {
    const config = {
      headers: {
        Authorization: `Token ${token}`, // Remove Cookies.get(token)
      },
    };

    axios
      .get('https://unicdata.pythonanywhere.com/profile/', config)
      .then((res) => {
        // Handle successful response here
        console.log(res.data);
        setToken(res.data?.token)
        console.log(token);
        setUser({ ...user, ...res.data });
        console.log(res.data);
        if(token){
          router.push('/dashboard')
         }
       
      })
      .catch((err) => {
        // Handle authentication error
        if (err.response.status === 401) {
          console.log("Unauthorized. Token may be invalid or expired.");
          // Optionally, you can redirect to the login page or show an error message to the user.
        } else {
          // Handle other errors
          console.log("An error occurred:", err);
        }
      });
  }
}, [token]);

useEffect(() => {
  // Set the token in a cookie
  Cookies.set('token', token, { expires: 7 }); // Set an expiration if needed
}, []);
  return (
    <div className=" flex flex-col justify-between h-screen py-[40px] px-4">
       <ToastContainer
          className=" mb-8"
          position="top-right"
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
      <div className=" flex flex-col gap-12">
        <p className=" font-bold text-[28px]">LearnVerse</p>
        <span className=" text-[22px]">
          <span className=" font-black">Login</span> <span>to account</span>
        </span>
        <form onSubmit={(e) => handleLogin(e)} className="flex flex-col gap-8">
          <div className=" flex flex-col gap-8">
            <div className=" border border-primary-green h-[60px] rounded-full p-2">
              <p className=" bg-white w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm font-extralight">
                Username
              </p>
              <input
                type=""
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" w-full h-full bg-transparent outline-none px-3"
                placeholder="kelvin@gmail.com"
              />
            </div>
            <div className=" border border-primary-green h-[60px] rounded-full p-2">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" w-full h-full bg-transparent outline-none px-3"
                placeholder="Password"
              />
            </div>
          </div>
          <button
            type="submit"
            className=" bg-primaryButton h-[60px] rounded-full text-white font-semibold text-lg w-full"
          >
            Logins
          </button>
          <button
            type="submit"
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