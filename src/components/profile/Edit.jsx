"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import MyContext from "../../context/context";
import { FaUserCircle } from "react-icons/fa";

const Edit = ({ setScreen }) => {
  const {
    token,
    setToken,
    setPASS,
    PASS,
    setUser,
    setProfileImage,
    profileImage,
    user,
  } = useContext(MyContext);

  const cokkieToken = Cookies.get("token");



  if (!cokkieToken) {
    return <InvalidAuth />;
  } else {
    useEffect(() => {
      setToken(cokkieToken);
      if (token) {
        const config = {
          headers: {
            Authorization: `Token ${token}`,
          },
        };

        axios
          .get("https://unicdata.pythonanywhere.com/profile", config)
          .then((res) => {
            // Handle successful response here
            console.log(res.data);
            setUser({ ...user, ...res.data });
            setToken(token); // Set the token here
          })
          .catch((err) => {
            toast.error("Invalid credentials try again");
            console.log(err);
          });
      }
    }, [token]);
    return (
      <>
        <div className=" mt-[30px] flex gap-8 items-center">
          {user.profile_picture ? (
            <img
              className="w-[30vw] h-[18vh] rounded-md object-cover"
              src={user?.profile_picture}
              alt=""
            />
          ) : (
            <FaUserCircle size={90} />
          )}

          <div >
            <p className=" text-[22px] font-semibold">{user?.username}</p>
            <p className=" text-sm">{user?.email}</p>
            <button
              className=" py-3 px-10  text-white font-bold mt-2 rounded-full bg-[#37494E]"
              onClick={() => setScreen("save")}
            >
              Edit
            </button>
          </div>
        </div>

        <div className=" mt-[70px] h-[90%] flex flex-col gap-4">
          <p className=" font-bold">Subscription Plan</p>
         
         
          <div className=" w-full flex bg-[#5E868E] p-5 rounded-[20px] text-white gap-2 items-start">
            <img src="/bullet.svg" alt="" className=" pt-1" />
            <div>
    
              <p className=" font-bold text-lg">Monthly</p>
              <p className=" text-sm text-[#C4C4C4]">
                Pay monthly, cancel at any time
              </p>
            </div>
            <p className=" font-semibold pl-4">N2,000</p>
          </div>
          <div className=" flex justify-between gap-3">
            <div>
              <label htmlFor="">User Type</label>
              <h3 className=" mt-3 font-extrabold  text-gray-400"> {user.user_type}</h3>
              <Link href={"/create"}>
             <p className=" mt-4  text-center flex bg-green-900 text-white p-3 rounded-md font-bold">Create Course</p>
          </Link>
             
            </div>
            <div className=" flex gap-9 mb-8 justify-center items-center">
          <button className=" px-4  py-2 flex gap-4 text-white rounded-full bg-[#EE4242]">
                        Cancel
                      </button>
                      <Link href={"/subscribe"}>
                        <div
                          className=" px-4 py-2 text-white rounded-full bg-[#37494E]"
                        >
                          Renew
                        </div>
                      </Link>
            </div>
           
          </div>
          <div className=" mt-8">
            <p className=" font-bold">Courses Covered.</p>
            <div className=" flex gap-6 items-center mt-4">
              <img src="/pie-chart.svg" alt="" />
              <p>You have covered 90% of the courses, good job!</p>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Edit;
