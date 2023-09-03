"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import TutorsCard from "../../components/cards/TutorsCard";
import Link from "next/link";
import axios from "axios";
import withAuth from "../../components/withAuth/withAuth";
import MyContext from "../../context/context";
import Cookies from 'js-cookie';

const page = () => {
  const [dashboard, setDashboard] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const cokkieToken = Cookies.get('token'); 
  const { token,setToken,setPASS,PASS, setUser, user } = useContext(MyContext);



  setToken(cokkieToken)

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };




  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      
      const videoURL = URL.createObjectURL(file);
      setSelectedVideo({videoURL,name:file.name});
    }
  };

  const fileInputRef = useRef(null);
  const PDFInputRef = useRef(null);

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


  const uploadAll=()=>{
    const config = {
      headers: {
        Authorization: `Token ${token}`, // Remove Cookies.get(token)
      },
    };

    axios.post("https://unique.pythonanywhere.com/",{
   title,
   description,
   level,
   video_file:'',
   pdf:''
  },config)
  }
  



  if (cokkieToken === '') {
    return (<InvalidAuth />)
   }
   else{

    useEffect(() => { 
      
      setToken(cokkieToken)
    if (token) {
      const config = {
        headers: {
          Authorization: `Token ${token}`,
        },
      };
   
      axios
        .get('https://unicdata.pythonanywhere.com/profile/', config)
        .then((res) => {
          // Handle successful response here
          console.log(res.data);
          setUser({ ...user, ...res.data });
          setToken(token); // Set the token here
        })
        .catch((err) => {
          toast.error('Invalid credentials try again')
          console.log(err);
        });
    }
  }, [token]);



  const handleUpload = async (e) => {
    e.preventDefault();
    
    const config = {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    };
    
    const newFormData = new FormData();
    newFormData.append('title', title);
    newFormData.append('description', description);
    newFormData.append('level', level);
   
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
  if (selectedVideo) {
    newFormData.append('video_file', selectedVideo); // Just append the selected file object
  }

  // Check if a PDF file is selected
  if (selectedFile) {
    newFormData.append('pdf', selectedFile); // Just append the selected file object
  }

  // Append the cover_image as a file
  if (selectedImage) {
    newFormData.append('cover_image', selectedImage);
  }

      
      // Send the FormData directly in the POST request
      await axios.post("https://unicdata.pythonanywhere.com/videos/", newFormData, config)
        .then((res) => {
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
      };

  return (
    <>
      {dashboard ? (
        <div className=" py-6 px-4 flex flex-col">
          <div className=" flex gap-[60px] justify-end">
            <img
              src="/upload.svg"
              alt=""
            
              className=" cursor-pointer"
              onClick={() => setDashboard(false)}
            />
            <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
              Home
            </p>
          </div>
          <div className=" flex flex-col gap-4 mt-6">
            <p className=" font-bold text-lg">My Videos</p>
            <TutorsCard />
          </div>
        </div>
      ) : (
        <div className=" bg-[#9E7167] pt-6 ">
       
          <div className=" flex gap-[60px] text-white px-4">
            <img
              src="/arrow-back-white.svg"
              onClick={() => setDashboard(true)}
              alt=""
              className=" cursor-pointer"
            />
            <p className=" font-semibold text-lg absolute left-1/2 transform -translate-x-1/2">
              Upload
            </p>
          </div>
          <div  className="w-full relative  flex items-center justify-center py-10 gap-5  flex-col ">
          <input type="file" accept="image/*" name="cover_image" className="absolute z-40 top-9 opacity-0  w-full bg-red-500 flex items-center h-full" onChange={handleImageUpload} />
          {selectedImage? <img
          src={selectedImage}
          alt="Selected"
         
          className="h-full"
          style={{ maxWidth: '300px' }}
        /> :
            <img src="/upload-white.svg" alt="" />}
            <p className=" text-white font-bold text-xl">Upload Cover</p>
          </div>
          <div className=" h-full py-[50px] rounded-t-[20px] w-full bg-white px-6 flex flex-col gap-6 pb-28">
            <div className=" flex flex-col gap-2">
              <p>Title</p>
              <input
                type="text"
                value={title}
                
                onChange={(e)=>setTitle(e.target.value)}
                
                className=" border-b border-[#919191] outline-none"
                placeholder="My first Video"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <p>Description</p>
              <textarea
                type="text"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                className=" border-b border-[#919191] outline-none "
                placeholder="Description of the video"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <p>Level</p>
              <input
                type="text"
                value={level}
                onChange={(e)=>setLevel(e.target.value)}
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
                    ):
                    <img
                          src="/video-1.png"
                          alt=""
                          className=" rounded-[10px] w-[160px]"
                        />
                }

              <div className=" flex justify-between">
                <div className="flex gap-4 items-center">
                
                  <button onClick={handleButtonClick}>
        <img src="/add-button.svg" alt="" />
      </button>
                  <input
                   id="video-input"
        type="file"
        accept="video/*"
        className=" hidden"
        ref={fileInputRef}
        onChange={handleVideoUpload}
      />
     
                 
                 
                  <p className=""  onClick={handleVideoUpload} >{selectedVideo?selectedVideo.name:" Add video"}</p>
                </div>
                <button className=" px-8 bg-[#37494E] text-white rounded-full">
                  Use AI!
                </button>
              </div>
              <div className=" w-full h-[1px] bg-[#828282]" />
              <div className=" flex gap-4 items-center">
                <img onClick={handlePDFUpload} src="/add-button.svg" alt="" />
                <input type="file"   ref={PDFInputRef}  className="hidden"  onChange={(e)=>  setSelectedFile(e.target.files[0])} />
               
                <p> {selectedFile?selectedFile.name:"Add PDF"}</p>
               
              
                 
              </div>
              <div className=" w-full h-[1px] bg-[#828282]" />

              <div className=" flex justify-between items-center">
                <Link href={"/create/create-quiz"}>
                  <div className=" px-8 bg-[#37494E] text-white rounded-full h-[50px] flex items-center">
                    Add Quiz
                  </div>
                </Link>
                <p className=" font-bold ">Time: 5:00</p>
              </div>
            </div>
          </div>
          <button onClick={(e)=>handleUpload(e)} className=" bg-primaryButton w-[90%] fixed bottom-6  left-1/2 transform -translate-x-1/2 h-[60px] rounded-full text-white">
            UPLOAD
          </button>

        </div>
      )}
    </>
  );
};
}


export default page;
