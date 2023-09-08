"use client";
import { useRef, useState } from "react";

// import React from "react";
import Image from "next/image";

const UploadCV = ({ setScreen }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const PDFInputRef = useRef(null);

  const handlePDFUpload = (e) => {
    setSelectedFile(PDFInputRef.current.click());

    if (selectedFile) {
      // Perform the file upload to your REST API here
      // You can use the Fetch API, Axios, or any other method
      // Make sure to send the selectedFile to the API
    }
  };

  return (
    <div className=" flex flex-col justify-between h-full">
      <div className=" flex flex-col gap-6">
        <div className=" flex gap-[60px] items-center">
          <button onClick={() => setScreen("screen_1")}>
            <Image height={40} width={40} src="/arrow-back.svg" alt="" />
          </button>
          <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
            Upload CV
          </p>
        </div>
        <p>the admins will check your CV and get back to you soon.</p>
        <div className=" bg-[#67949E1A] w-full p-5 flex flex-col gap-4 mt-6 rounded-2xl border-[#67949E] border border-dashed items-center">
          <div className=" gap-2 flex">
            <Image src={"/upload-cv.svg"} width={20} height={20}></Image>
            <p className=" text-[#34343480]">Drag files here to upload</p>
          </div>
          {selectedFile && (
            <p >selected: {selectedFile.name}</p>
          )}
          <button
            className=" bg-[#67949E99] px-4 py-3 rounded-full text-white"
            onClick={handlePDFUpload}
          >
            {selectedFile ? "Change" : "Browse files"}
            <input
              type="file"
              ref={PDFInputRef}
              className="hidden"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </button>
        </div>
      </div>
      <button className=" bg-primaryButton h-[60px] rounded-full text-white text-lg">
        Upload
      </button>
    </div>
  );
};

export default UploadCV;
