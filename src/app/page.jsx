"use client";

import { useRouter } from "next/router";
import Welcome from "./welcome/page"
export default function Home() {
  
  return (
    <div className=" bg-[#67949E] h-screen flex flex-col items-center py-[60px] justify-center">
     <Welcome/>
    </div>
  );
}
