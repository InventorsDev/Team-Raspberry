import React from "react";
import TopicCard from "../../../components/cards/TopicCard";
import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlineBackward } from'react-icons/ai'
const page = () => {
  return (
    <div className=" py-6  flex flex-col gap-6 px-4 ">
      <p >
        <Link className="flex  items-center gap-2" href={'/dashboard'}>
       <AiOutlineArrowLeft size={30}/> back
      </Link>
       
      </p>
       
      <div className=" flex gap-[60px]">
        <Link href={"/dashboard"}>
          <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2F7fe4e3_e9631d35de724b12b75a50f50d0c76fd~mv2.jpg%2Fv1%2Fcrop%2Fx_0%2Cy_60%2Cw_395%2Ch_275%2Ffill%2Fw_553%2Ch_385%2Cal_c%2Clg_1%2Cq_80%2Cenc_auto%2FBiology.jpg&tbnid=nSZlMk1giSk9XM&vet=12ahUKEwjIrbzm2v-AAxW1mCcCHVW7B8kQMygTegUIARCeAQ..i&imgrefurl=https%3A%2F%2Fwww.titaniumtutors.co.uk%2Fbiology-tutor&docid=4Pa3Ql_UH04WLM&w=553&h=385&q=biology&ved=2ahUKEwjIrbzm2v-AAxW1mCcCHVW7B8kQMygTegUIARCeAQ" alt="" />
        </Link>
      
      </div>
      <div className=" w-full p-3 bg-[#8498CBB2]  items-center gap-2.5 rounded-[20px] shadow-2xl shadow-[#17337962]">
        <img src="/bio.png" alt="" className=" w-[15ƒ0px]" />
        <div className=" flex flex-col gap-5">
         <h1>What is Biology?</h1> 
         <p className=" text-white font-bold">
          
Biology is the natural science field that studies living things. The word biology comes from the greek language: “bios” means life, and “logos” means study. It could be described as the science of life and living organisms.
          </p>
          <p className=" text-sm text-[#173379] font-bold">5 topics</p>
        </div>
      </div>
      <div className=" grid   grid-cols-2 w-full  gap-6 mt-8">
        <Link href={"/courses/biology/cell"}>
           <TopicCard
          img={"/bio3.jpeg"}
          noCourse={3}
            level={"Intermediate"}
          topic={"Cells"}
        />
        </Link>
       
        <TopicCard
          img={"/bio5.jpeg"}
          noCourse={3}
            level={"Intermediate"}
          topic={"ecology"}
        />
        <TopicCard
          img={"/bio4.jpeg"}
          noCourse={3}
           level={"Intermediate"}
          topic={"Organisms exchange substances with their environment"}
        />
        <TopicCard
          img={"/bio2.jpeg"}
          noCourse={3}
       level={"Intermediate"}
          topic={"Biological molecules"}
        />
        <TopicCard
          img={"/bio1.jpeg"}
          noCourse={3}
          level={"Intermediate"}
          topic={"Genetic information, variation and relationships between organisms"}
        />
      </div>
    </div>
  );
};

export default page;
