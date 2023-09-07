import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ image, topic, slug }) => {
  return (
    <Link href={`/library/${slug}`}>
      <div className=" flex flex-col gap-2 items-center">
        <div className=" flex flex-col items-center">
        <Image width={40} height={20} src={image} alt="" className=" h-[130px] w-[73px ] mb-[-90px] z-10" />
          <div className=" w-[160px] h-[130px] rounded-[20px] bg-slate-200"></div>
        </div>
        <p className=" capitalize">{topic}</p>
      </div>
    </Link>
  );
};

export default BookCard;
