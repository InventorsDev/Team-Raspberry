"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Edit from "../../components/profile/Edit";
import Save from "../../components/profile/Save";
import Navbar from "../../components/nav/Navbar";
import MyContext from "../../context/context";
import Cookies from 'js-cookie';
import InvalidAuth from "../../components/invalidAuth/InvalidAuth";
import axios from "axios";
const page = () => {
  const [screen, setScreen] = useState("edit");
  const { token,setToken,setPASS,PASS, setUser, user } = useContext(MyContext);



 
      const cokkieToken = Cookies.get('token'); 



  if (cokkieToken === '') {
    return (<InvalidAuth />)
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
          .get('https://unicdata.pythonanywhere.com', config)
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
    <div className=" flex flex-col px-4 py-8 justify-between h-screen">
      <div>
        <div className=" flex gap-[60px]">
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
          <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
            Profile
          </p>
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
