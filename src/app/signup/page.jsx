import Screen1 from "@/components/signup/Screen1";
import Screen2 from "@/components/signup/Screen2";
import Screen3 from "@/components/signup/Screen3";
import Screen4 from "@/components/signup/Screen4";
import Screen5 from "@/components/signup/Screen5";
import Screen6 from "@/components/signup/Screen6";
import Success from "@/components/signup/Success";

export default function Home() {
  return (
    <div className=" flex justify-center">
      <div className=" h-screen flex flex-col py-[40px] px-4 justify-between max-w-[600px] w-full">
        <Success />
      </div>
    </div>
  );
}
