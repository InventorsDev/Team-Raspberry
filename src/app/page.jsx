"use client";

import React,{ useRouter,useContext, useEffect, useRef, useState } from "react";
import Welcome from "./welcome/page"
import Dashboard from "./dashboard/page"
import MyContext from "../context/context";
import Cookies from 'js-cookie';
import axios from "axios";
export default function Home() {
 
    const { token,setToken,setPASS,PASS, setUser, user } = useContext(MyContext);
const cokkieToken = Cookies.get('token'); 
  setToken(cokkieToken)



  if (cokkieToken === '') {
    return (
       <div className=" bg-[#67949E] h-screen flex flex-col items-center py-[60px] justify-center">
    <Dashboard/>
    <Welcome/>
   </div>)
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
        .get("https://unicdata.pythonanywhere.com/profile/", config)
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

  return (

     <Dashboard/>

  );
}
}
