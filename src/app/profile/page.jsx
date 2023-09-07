"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Edit from "../../components/profile/Edit";
import Save from "../../components/profile/Save";
import Navbar from "../../components/nav/Navbar";
import MyContext from "../../context/context";
import Cookies from 'js-cookie';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { useRouter } from "next/navigation";
import InvalidAuth from "../../components/invalidAuth/InvalidAuth";
import Image from "next/image";
const Page = () => {
  const [screen, setScreen] = useState("edit");
  const { token,setToken,setPASS,PASS, setUser, user } = useContext(MyContext);



 
 const router=useRouter()


    useEffect(() => {
      
      const cokkieToken = Cookies.get('token'); 
      if (cokkieToken==='') {
    return <InvalidAuth />
   }
   else{
     
      if (cokkieToken !== '') {
        setToken(cokkieToken);
        const config = {
          headers: {
            Authorization: `Token ${cokkieToken}`,
          },
        };
  
        axios
          .get('https://unicdata.pythonanywhere.com/profile', config)
          .then((res) => {
            console.log(res.data);
            setUser({ ...user, ...res.data });
            setToken(token);
          })
          .catch((err) => {
            toast.error('Invalid credentials, please try again');
            console.log(err);
          });
      }
      }
    }, []);
  

       
    

    const handleLogOut=async()=>{ const config = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };
      await axios.post('https://unicdata.pythonanywhere.com/logout/', { revoke_token: true }, config)
      .then((response) => {
        // Handle success, e.g., clear user session, redirect, etc.
        console.log("Logout successful", response);
        router.push('/login')
      })
      .catch((error) => {
        // Handle error, e.g., show an error message.
        console.error("Logout failed", error);
      });
     
  }




  
  return (
    <div className=" flex flex-col px-4 py-8 justify-between h-screen">
      <div >
        <div className=" flex items-center px-5 justify-between gap-[60px]">
          {screen == "edit" ? (
            <Link href={"/dashboard"}>
              <Image width={40} height={20} src="/arrow-back.svg" alt="" />
            </Link>
          ) : (
            <Image width={40} height={20}
              src="/arrow-back.svg"
              alt=""
              className=" cursor-pointer"
              onClick={() => setScreen("edit")}
            />
          )}
          <div>
             <p className=" font-semibold text-lg   transform ">
            Profile
          </p>
          </div>
         
                
          <button onClick={handleLogOut} className="    bg-red-700 text-white p-3 rounded-xl transform ">
            Logout
          </button>
          
        </div>

        <>{screen == "edit" ? <Edit setScreen={setScreen} /> : <Save />}</>
      </div>
      {screen == "edit" ? (
        <Navbar />
      ) : (
      <></>
      )}
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
    </div>
  );
};



export default Page;
