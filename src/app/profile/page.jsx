"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Edit from "../../components/profile/Edit";
import Save from "../../components/profile/Save";
import Navbar from "../../components/nav/Navbar";
import MyContext from "../../context/context";
import Cookies from 'js-cookie';

import axios from "axios";
import { useRouter } from "next/navigation";
import InvalidAuth from "../../components/invalidAuth/InvalidAuth";
const page = () => {
  const [screen, setScreen] = useState("edit");
  const { token,setToken,setPASS,PASS, setUser, user } = useContext(MyContext);



 
      const cokkieToken = Cookies.get('token'); 
const router=useRouter()


  if (cokkieToken === '') {
    return <InvalidAuth />
   }
   else{

    useEffect(() => { 
      
        setToken(cokkieToken)
      if (token) {
        const config = {
          headers: {
            Authorization: `Token ${token}`,
          },
        };
     
        axios
          .get('https://unicdata.pythonanywhere.com/profile', config)
          .then((res) => {
            // Handle successful response here
            console.log(res.data);
            setUser({ ...user, ...res.data });
            setToken(token); // Set the token here
          })
          .catch((err) => {
            toast.error('Invalid credentials try again')
            console.log(err);
          });
      }
    }, [token]);

       
    

    const handleLogOut=async()=>{
      
  
  }




  
  return (
    <div className=" flex flex-col px-4 py-8 justify-between h-screen">
      <div >
        <div className=" flex items-center px-5 justify-between gap-[60px]">
          {screen == "edit" ? (
            <Link href={"/dashboard"}>
              <img src="/arrow-back.svg" alt="" />
            </Link>
          ) : (
            
            <img
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
    </div>
  );
};
};


export default page;
