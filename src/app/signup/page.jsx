"use client";

import { useState } from "react";
import FinalScreen from "../../components/signup/FinalScreen";
import Screen1 from "../../components/signup/Screen1";
import Screen2 from "../../components/signup/Screen2";
import Screen3 from "../../components/signup/Screen3";
import Success from "../../components/signup/Success";

export default function Home() {
  const [screen, setScreen] = useState("screen_2");
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    password: "",
    confirmPassword: "",
    email: "",
    typeOfUser: "student",
  });

  let currentScreen;
  switch (screen) {
    case "screen_1":
      currentScreen = (
        <Screen1
          screen={screen}
          setScreen={setScreen}
          fullname={formData.fullname}
          email={formData.email}
          password={formData.password}
          confirmPassword={formData.confirmPassword}
          setFullname={(value) => setFormData({ ...formData, fullname: value })}
          setEmail={(value) => setFormData({ ...formData, email: value })}
          setPassword={(value) => setFormData({ ...formData, password: value })}
          setConfirmPassword={(value) =>
            setFormData({ ...formData, confirmPassword: value })
          }
        />
      );
      break;

    case "screen_2":
      currentScreen = <Screen2 screen={screen} setScreen={setScreen} />;
      break;

    case "screen_3":
      currentScreen = (
        <Screen3
          screen={screen}
          setScreen={setScreen}
          typeOfUser={formData.typeOfUser}
          setTypeOfUser={(value) =>
            setFormData({ ...formData, typeOfUser: value })
          }
        />
      );
      break;

    case "screen_4":
      currentScreen = (
        <FinalScreen
          screen={screen}
          setScreen={setScreen}
          username={formData.username}
          fullname={formData.fullname}
          email={formData.email}
          password={formData.password}
          confirmPassword={formData.confirmPassword}
          setUserName={(value) => setFormData({ ...formData, username: value })}
        />
      );
      break;

    case "success":
      currentScreen = <Success screen={screen} setScreen={setScreen} />;
      break;

    default:
      currentScreen = <Screen1 screen={screen} setScreen={setScreen} />;
      break;
  }
  return (
    <div className=" flex justify-center">
      <div className=" h-screen flex flex-col py-[40px] px-4 justify-between max-w-[600px] w-full">
        {currentScreen}
      </div>
    </div>
  );
}
