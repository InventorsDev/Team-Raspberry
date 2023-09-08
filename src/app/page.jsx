"use client";

import { useRouter } from "next/navigation";
import Welcome from "./welcome/page";
import Cookies from "js-cookie";

export default function Home() {
  const cokkieToken = Cookies.get("token");
  console.log(cokkieToken);
  const router = useRouter();
  if (cokkieToken === undefined || cokkieToken === null || cokkieToken === "") {
    router.push("/");
  }
  return (
    <>
      <Welcome />
    </>
  );
}
