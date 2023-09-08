"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import TutorsCard from "../../components/cards/TutorsCard";
import Link from "next/link";
import axios from "axios";
import MyContext from "../../context/context";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AiFillBackward,
  AiFillCaretLeft,
  AiOutlineArrowLeft,
  AiOutlineLeft,
} from "react-icons/ai";
import InvalidAuth from "../../components/invalidAuth/InvalidAuth";
import Image from "next/image";
const Page = () => {
  const [dashboard, setDashboard] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const cokkieToken = Cookies.get("token");
  const [coverIMAGE, setCoverIMAGE] = useState("");
  const [VIDEO, setVIDEO] = useState("");
  const { token, setToken, setPASS, PASS, setUser, user } =
    useContext(MyContext);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedMainCategory, setSelectedMainCategory] = useState(null);
  const [note, setNote] = useState(null);

  const fileInputRef = useRef(null);
  const PDFInputRef = useRef(null);

  const handleCategoryChange = (value, course) => {
    setSelectedCategory(value);
    setSelectedMainCategory(course);
    console.log("Selected Category:", course);
  };

  setToken(cokkieToken);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    setVIDEO(file);
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setSelectedVideo({ videoURL, name: file.name });
    }
  };

  const handleButtonClick = () => {
    setSelectedVideo(fileInputRef.current.click());
  };

  const handlePDFUpload = (e) => {
    setSelectedFile(PDFInputRef.current.click());

    if (selectedFile) {
      // Perform the file upload to your REST API here
      // You can use the Fetch API, Axios, or any other method
      // Make sure to send the selectedFile to the API
    }
  };

  const uploadAll = () => {
    const config = {
      headers: {
        Authorization: `Token ${token}`, // Remove Cookies.get(token)
      },
    };

    axios.post(
      "https://unique.pythonanywhere.com/",
      {
        title,
        description,
        level,
        video_file: "",
        pdf: "",
      },
      config
    );
  };

  const config = {
    headers: {
      Authorization: `Token ${cokkieToken}`,
    },
  };

  useEffect(() => {
    if (cokkieToken === "") {
      return <InvalidAuth />;
    } else {
      axios
        .get("https://unicdata.pythonanywhere.com/profile/", config)
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log(selectedImage);
        setSelectedImage(reader.result);
        setCoverIMAGE(e.target.files[0]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    const newFormData = new FormData();
    newFormData.append("title", title);
    newFormData.append("description", description);
    newFormData.append("level", "beginner");
    newFormData.append("subject", selectedCategory);
    newFormData.append("co", selectedCategory);

    // Check if a video file is selected
    // if (selectedVideo) {
    //   // Create a Blob object from the video URL
    //   const videoBlob = await fetch(selectedVideo.videoURL).then((res) =>
    //     res.blob()
    //   );

    //   // Append the Blob object as a file with a custom name
    //   newFormData.append('video_file', videoBlob, selectedVideo.name);
    // }

    // Check if a video file is selected
    if (VIDEO) {
      newFormData.append("video_file", VIDEO); // Just append the selected file object
    }

    // Check if a PDF file is selected
    if (selectedFile) {
      newFormData.append("pdf", selectedFile); // Just append the selected file object
    }

    // Append the cover_image as a file
    if (coverIMAGE) {
      newFormData.append("cover_image", coverIMAGE);
    }

    // Send the FormData directly in the POST request

    await axios
      .post(
        "https://unicdata.pythonanywhere.com/categories/",
        {
          name: title,
          description: note,
        },
        config
      )
      .then(async (res) => {
        console.log(res.data);
        await axios
          .post(
            "https://unicdata.pythonanywhere.com/subcategories/",
            {
              name: selectedMainCategory,
              category: res.data.id,
            },
            config
          )
          .then((res) => {
            console.log(res.data);
          })
          .catch((e) => {
            toast.error("Try again..");
            console.log(e);
          });
      })
      .catch((e) => {
        toast.error("Try again..");
        console.log(e);
      });

    await axios
      .post("https://unicdata.pythonanywhere.com/videos/", newFormData, config)
      .then((res) => {
        toast.success("Successful");
        console.log(res.data);
        setDashboard(!dashboard);
      })
      .catch((e) => {
        toast.error("Try again..");
        console.log(e);
      });
  };

  return (
    <>
      {!dashboard ? (
        <div className=" py-6 px-4 flex flex-col">
          <div className=" flex justify-end items-center  gap-[60px]">
            {/* <Link href={"/dashboard"}>
              <AiOutlineArrowLeft size={30} />
            </Link> */}

            <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
              Home
            </p>
            <Image
              width={20}
              height={20}
              src="/upload.svg"
              alt=""
              className=" cursor-pointer"
              onClick={() => setDashboard(!dashboard)}
            />
          </div>
          <div className=" flex flex-col gap-4 mt-6">
            <p className=" font-bold text-lg">My Videos</p>
            <TutorsCard />
          </div>
        </div>
      ) : (
        <div className=" bg-[#9E7167] pt-6 ">
          <div className=" flex flex-col gap-4 mt-6"></div>
          <div className=" flex justify-between gap-[60px] text-white px-4">
            <Image
              width={20}
              height={20}
              src="/arrow-back-white.svg"
              onClick={() => setDashboard(!dashboard)}
              alt=""
              className=" cursor-pointer"
            />
            <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
              Upload
            </p>
            <p
              onClick={() => setDashboard(!dashboard)}
              className=" text-black p-2 font-bold text-lg bg-slate-50 rounded-xl"
            >
              My Videos
            </p>
          </div>
          <form encType="multipart/form-data" onSubmit={handleImageUpload}>
            <div className="w-full relative  flex items-center justify-center py-10 gap-5  flex-col ">
              <input
                type="file"
                accept="image/*"
                name="cover_image"
                className="absolute z-40 top-9 opacity-0  w-full bg-red-500 flex items-center h-full"
                onChange={handleImageUpload}
              />
              {selectedImage ? (
                <Image
                  width={200}
                  height={200}
                  src={selectedImage}
                  alt="Selected"
                  className="h-full"
                  style={{ maxWidth: "300px" }}
                />
              ) : (
                <Image width={20} height={20} src="/upload-white.svg" alt="" />
              )}
              <p className=" text-white font-bold text-xl">Upload Cover</p>
            </div>
          </form>
          <div className=" h-full py-[50px] rounded-t-[20px] w-full bg-white px-6 flex flex-col gap-6 pb-28">
            <div className=" flex flex-col gap-2">
              <p>Title</p>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className=" border-b border-[#919191] outline-none"
                placeholder="My first Video"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <p>Description</p>
              <textarea
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className=" border-b border-[#919191] outline-none "
                placeholder="Description of the video"
              />
            </div>
            <ToastContainer></ToastContainer>
            <div className=" flex flex-col gap-2">
              <p>Level</p>
              <input
                type="text"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className=" border-b border-[#919191] outline-none text-[#777777]"
                placeholder="Intermediate"
              />
            </div>
            <div className=" flex flex-col gap-6">
              {selectedVideo ? (
                <video controls width="320" height="240">
                  <source src={selectedVideo.videoURL} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  width={20}
                  height={20}
                  src="/video-1.png"
                  alt=""
                  className=" rounded-[10px] w-[160px]"
                />
              )}

              <div className=" flex justify-between">
                <div className="flex gap-4 items-center">
                  <button onClick={handleButtonClick}>
                    <Image
                      width={20}
                      height={20}
                      src="/add-button.svg"
                      alt=""
                    />
                  </button>
                  <input
                    id="video-input"
                    type="file"
                    accept="video/*"
                    className=" hidden"
                    ref={fileInputRef}
                    onChange={handleVideoUpload}
                  />

                  <p className="" onClick={handleVideoUpload}>
                    {selectedVideo ? selectedVideo.name : " Add video"}
                  </p>
                </div>
                {/* <button className=" px-8 bg-[#37494E] text-white rounded-full">
                  Use AI!
                </button> */}
              </div>
              <div className=" w-full h-[1px] bg-[#828282]" />
              <div className=" flex gap-4 items-center">
                <Image
                  width={40}
                  height={40}
                  onClick={handlePDFUpload}
                  src="/add-button.svg"
                  alt=""
                />
                <input
                  type="file"
                  ref={PDFInputRef}
                  className="hidden"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                />

                <p> {selectedFile ? selectedFile.name : "Add PDF"}</p>
              </div>
              <div className=" w-full h-[1px] bg-[#828282]" />
              <p className=" p-2 ">Select a Course Category</p>
              <ul className="order-1   flex flex-col gap-6">
                <li className="list-decimal flex gap-3">
                  <label htmlFor="biology">Biology</label>
                  <input
                    id="biology"
                    value={1}
                    type="radio"
                    checked={selectedCategory === 1}
                    onChange={() => handleCategoryChange(1, "biology")}
                  />
                </li>
                <li className="list-decimal flex gap-3">
                  <label htmlFor="chemistry">Chemistry</label>
                  <input
                    id="chemistry"
                    value={2}
                    type="radio"
                    checked={selectedCategory === 2}
                    onChange={() => handleCategoryChange(2, "chemistry")}
                  />
                </li>
                <li className="list-decimal flex gap-3">
                  <label htmlFor="physics">Physics</label>
                  <input
                    id="physics"
                    value={3}
                    type="radio"
                    checked={selectedCategory === 3}
                    onChange={() => handleCategoryChange(3, "physics")}
                  />
                </li>
                <li className="list-decimal flex gap-3">
                  <label htmlFor="geography">Geography</label>
                  <input
                    id="geography"
                    value={4}
                    type="radio"
                    checked={selectedCategory === 4}
                    onChange={() => handleCategoryChange(4, "geography")}
                  />
                </li>
                <li className="list-decimal flex gap-3">
                  <label htmlFor="ict">ICT</label>
                  <input
                    id="ict"
                    value={5}
                    type="radio"
                    checked={selectedCategory === 5}
                    onChange={() => handleCategoryChange(5, "ict")}
                  />
                </li>
              </ul>
            </div>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              name=""
              className=" border border-black/10 rounded-lg p-4 "
              placeholder="Notes.... "
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <div className=" flex justify-between items-center">
              <Link href={"/create/create-quiz"}>
                <div className=" px-8 bg-[#37494E] text-white rounded-full h-[50px] flex items-center">
                  Add Quiz
                </div>
              </Link>
              <p className=" font-bold ">Time: 5:00</p>
            </div>
          </div>
          <button
            type="submit"
            onClick={(e) => handleUpload(e)}
            className=" bg-primaryButton w-[90%] fixed bottom-6  left-1/2 transform -translate-x-1/2 h-[60px] rounded-full text-white"
          >
            UPLOAD
          </button>
        </div>
      )}
    </>
  );
};

export default Page;
