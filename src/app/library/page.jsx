'use client'
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../../components/nav/Navbar";
import BookCard from "../../components/cards/BookCard";
import axios from "axios";
import MyContext from "../../context/context";
import { useRouter } from "next/navigation";
import InvalidAuth from "../../components/invalidAuth/InvalidAuth";
import Cookies from 'js-cookie';

const Page = () => {
  const router = useRouter();
  const cokkieToken = Cookies.get('token');
  const { token, PASS, setPASS, setToken, setUser, user } = useContext(MyContext);

  useEffect(() => {
    setToken(cokkieToken);
  }, [cokkieToken]);

  const [screen, setScreen] = useState("biology");

  useEffect(() => {
    // Check if the token is available
    if (token) {
      const config = {
        headers: {
          Authorization: `Token ${token}`,
        },
      };

      axios
        .get('https://unique.pythonanywhere.com/profile/', config)
        .then((res) => {
          console.log(res.data);
          setUser({ ...user, ...res.data });
          console.log(res.data);
        })
        .catch((err) => {
          if (err?.response?.status === 401) {
            console.log("Unauthorized. Token may be invalid or expired.");
          } else {
            console.log("An error occurred:", err);
          }
        });
    }
  }, [token]);

  const books = {
    biology: [
      { img: "/book-1.png", title: "biology" },
      // Add more items here
    ],
    chemistry: [
      { img: "/book-2.png", title: "chemistry" },
      // Add more items here
    ],
    physics: [
      { img: "/book-3.png", title: "physics" },
      // Add more items here
    ],
    geology: [
      { img: "/book-4.png", title: "geology" },
      // Add more items here
    ],
  };

  if (token === '') {
    return (<InvalidAuth />)
  } else {
    return (
      <div className="py-6 px-4 flex flex-col">
        <div className="flex gap-[60px]">
          <Link href={"/dashboard"}>
            <img src="/arrow-back.svg" alt="" />
          </Link>
          <p className="font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
            Library
          </p>
        </div>
        {/* Continue reading section */}
        <div className="w-full rounded-[20px] bg-primaryBg flex flex-col opacity-75 mt-12">
          {/* Content */}
        </div>
        <div className="flex justify-between mt-10 items-center">
          {Object.keys(books).map((key) => (
            <p
              key={key}
              className={`${screen === key && "font-bold"} cursor-pointer`}
              onClick={() => setScreen(key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </p>
          ))}
        </div>
        <div className="flex gap-6 flex-wrap justify-between mt-6 overflow-y-auto h-[50vh] pb-5">
          {books[screen].map((item, i) => (
            <BookCard key={i} slug={"36743"} image={item.img} topic={item.title} />
          ))}
        </div>
        <Navbar />
      </div>
    );
  }
};

export default Page;
