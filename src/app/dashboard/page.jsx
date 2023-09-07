'use client'
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import CourseCard from "../../components/cards/CourseCard";
import PopularCard from "../../components/cards/PopularCard";
import OngoingCard from "../../components/cards/OngoingCard";
import Navbar from "../../components/nav/Navbar";
import MyContext from "../../context/context";
import { useRouter } from "next/navigation";
import InvalidAuth from "../../components/invalidAuth/InvalidAuth";
import axios from "axios";
import Cookies from 'js-cookie';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineUser } from "react-icons/ai";
import {  FaUserCircle } from "react-icons/fa";
import Image from "next/image";


const Page = () => {
  const { token,setToken,setPASS,PASS, setUser,courseID,setCourseID,setProfileImage,profileImage, user } = useContext(MyContext);
  const router = useRouter();


  const courseData = [
    {
      img: "/biology-icon.svg",
      subject: "Biology",
      noCourses: 5,
      href: "/courses/biology",
    },
    {
      img: "/physics.svg",
      subject: "Physics",
      noCourses: 5,
      href: "/courses/physics",
    },
    {
      img: "/chem-icon.svg",
      subject: "Chemistry",
      noCourses: 5,
      href: "/courses/chemistry",
    },
    {
      img: "/geology.svg",
      subject: "Geology",
      noCourses: 5,
      href: "/courses/geology",
    },
    {
      img: "/ict1.jpeg",
      subject: "ICT",
      noCourses: 5,
      href: "/courses/ict",
    },
  ];

 
      const cokkieToken = Cookies.get('token'); 
      console.log(cokkieToken);
      const[popularCoursses,setPopularCourses]=useState([])
     const [searchQuery, setSearchQuery] = useState(""); // Step 1: Create state variable for search query




      
    useEffect(() => { 
     
      
        setToken(cokkieToken)
      if (token) {
        const config = {
          headers: {
            Authorization: `Token ${token}`,
          },
        };
     
        console.log(token);
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


          axios
          .get('https://unicdata.pythonanywhere.com/videos/', config)
          .then((res) => {
            // Handle successful response here
            console.log(res.data);
            setPopularCourses(res.data)
          
            setToken(token); // Set the token here
          })
          .catch((err) => {
            toast.error('Invalid credentials try again')
            console.log(err);
          });



      }
    }, [token,setToken]);
  

   
    const filteredCourses = courseData.filter((course) =>
      course.subject.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
  return (<>
  { !user.username?
  <div  >
     <div className={`${ token===undefined || token===null || token==='' ?"hidden":' flex  flex-col  justify-center items-center h-[100vh] w-full'}`} >
      <Image alt="" src='/lk.png' className=" bg-transparent rounded-full"  width={130} height={100}/>
      <div className=" shadow p-5 rounded-lg w-[90%] bg-gray-100 outline-[#000000ae] m-3 flex gap-8 flex-col text-center">
         <p style={{textShadow:'2px 2px 4px rgba(0, 0, 0, 0.5)'}} className="  text-blue-800    font-extrabold font-montserrat  text-[30px]"> LEARN VERSE</p>
       <p className=' font-[fantasy] text-center mb-5 px-9 text-blue-800 font-extrabold text-[16px]' >Embark on a Journey of Discovery and Transformation</p>
      
      </div>
      <Image alt="" className=" bg-transparent rounded-full justify-center flex items-center " src={'/spin.gif'} width={50} height={50}/>
      </div>
    {
      token===undefined || token===null || token===''  ? <InvalidAuth/>:null

     
    }
    
  </div>
  :  


  
  

    <div className="py-6 relative flex flex-col gap-3 pb-32">
   
      <Image width={30} height={30} className="w-[3.3em] absolute top-[5px] rounded-full" src='/lk.png'/>
       <ToastContainer
          className=" mb-8"
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      <div className="flex justify-between items-center px-4">
        <p className="font-bold">
       
          Hi! {user.username}
          
           </p>
 
           {user.profile_picture ?
           <div className="  relative">
              <Image width={176} height={96} className="w-[11vw] rounded-full h-[6vh]  " src={user?.profile_picture} alt="" />
               <span className=" block rounded-full absolute right-[-5px] top-[0] w-[.9em] h-[.9em]  bg-green-400"></span>
          
           </div>
           
           :
  <FaUserCircle size={40}/>
      }
      </div>
        <hr className=" bg-white shadow-md shadow-[#67949e]" />
      <p className="px-4  font-montserrat font-bold text-[1.3em]">Unlock your learning potential today!</p>
      <div className="flex pt-3 gap-4 justify-between px-4">
        <input
          type="text"
          placeholder="search a course"
          className="border  shadow-2xl shadow-[#67949e3c] border-[#67949E] rounded-lg h-10 w-full outline-none px-3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={(e)=>{ 
          e.preventDefault()
          setSearchQuery('')}} className="w-10 h-10 bg-[#67949E] rounded-lg flex items-center cursor-pointer justify-center">
          <Image width={30} height={30} src="/filter.svg" alt="" />
        </button>
      </div>
      <h2 className=" text-lg font-extrabold text-gray-500  my-4 px-4 ">Course Categories</h2>
      <div className="flex items-start justify-between px-4">
      
          {filteredCourses.length>0 ?
          <>
         <div className="grid grid-cols-2 items-start justify-between gap-16">
           {filteredCourses.map((course, index) => (
          <>
          
       
           <div key={index}>
            <Link  href={course.href} >
            <CourseCard
              img={course.img}
              subject={course.subject}
              noCourses={course.noCourses}
            />
             </Link>
          </div>
          
         
     
            </>
         
           
        ))}
          </div>
           </>
        :
         <p className=" text-red-600  w-full">No course of this Category</p>
        }
       
          
    
      </div>
      <h2 className=" font-[900] text-lg text-gray-500  my-4 px-4">Popular Topics</h2>
      <div className="flex w-full overflow-y-scroll gap-4 px-4">
        {/* <PopularCard img="/bio3.jpeg" course="Biology" topic="Cells" /> */}
        {popularCoursses.filter((course)=> course.creator_id!==user.id).map(course=>(<>
        <Link key={course.id} onClick={()=>setCourseID((course.id+5))} href={'/courses/'+ (course.id+5)}>
          <PopularCard img={course} course={course.title} topic={course.title} />
      
        </Link>
         </>))}
      
      </div>
      {/* <OngoingCard /> */}
      <Navbar />
    </div>
}
    </>
  );
};


export default Page;
