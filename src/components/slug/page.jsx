'use client'
import React, { useContext, useEffect, useState } from "react";
import TopicCard from "../../components/cards/TopicCard";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import MyContext from "../../context/context";
import { useFlutterwave } from "flutterwave-react-v3";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { useRouter } from 'next/navigation';
import {useQueryParam} from '../useParams/useQueryParam'
import axios from "axios";
import Cookies from "js-cookie";

const page = () => {
    const [popularCoursses,setPopularCourses]=useState([])
    const cokkieToken = Cookies.get("token");
   

    // // Access the "slug" parameter from the URL
    // const { slug } = router.query;


    // console.log(slug);

  const [show, setShow] = useState(true);
  const { token,setToken,setPASS,PASS, setUser, user,courseID,setCourseID } = useContext(MyContext);
  console.log(user);
  const config = {
    public_key: `FLWPUBK_TEST-841c10b026f35195c62cfc032d14c5a0-X`,
    tx_ref: Date.now(),
    amount: 2000,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: `${!user?.email ? "enaikeleomoh@gmail.com" : user?.email}`,
      phone_number: "09073597660",
      name: `${user.username ? user.username : "Enaikele Omoh"}`,
    },
    customizations: {
      title: `${user?.course ? user?.course : "Biology"}`,
      description: "Payment for " + user.courseTitle,
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  useEffect(()=>{
    setToken(cokkieToken);
    axios
    .get("https://unicdata.pythonanywhere.com/videos/",{
        headers: {
          Authorization: `Token ${token}`,
        },
      })
    .then((res) => {
      // Handle successful response here
      console.log(res.data);
      setPopularCourses(res.data);

      setToken(token); // Set the token here
    })
    .catch((err) => {
      console.log(err);
    });
  },[token])

const router=useRouter()
  if(!courseID){
    router.push('/dashboard')
  }






  const [data,setData]=useState([])
  const [MAINcourse,setMAINCourse]=useState([])
  const [filtered,setFiltered]=useState([])
  const [coursesByCategory, setCoursesByCategory] = useState({});

  useEffect(()=>{

   
  
     axios.get('https://unicdata.pythonanywhere.com/categories/',
    ) .then((res) => {
      console.log(res.data);
      setData(res.data)

    })
    .catch((e) => {
      // toast.error("Try again..");
      console.log(e);
    });



     axios.get('https://unicdata.pythonanywhere.com/subcategories/',
    ) .then((res) => {
      setMAINCourse(res.data)
      console.log(res.data);

    })
    .catch((e) => {
      // toast.error("Try again..");
      console.log(e);
    });

    axios
    .get("https://unicdata.pythonanywhere.com/videos/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
    .then((res) => {
      // Handle successful response here
      console.log(res.data);
      setPopularCourses(res.data);

      setToken(token); // Set the token here
    })
    .catch((err) => {
    
      console.log(err);
    });


  }, []);

  useEffect(() => {
   
    
    // Filter courses based on the "ict" category
    const filteredCourses = data.filter(course => {
      // Check if there is any category in categories where course.id matches category.category
      return MAINcourse.some(category => category.name === 'chemistry' && category.category === course.id);
    });
    setFiltered(filteredCourses)
    console.log(filteredCourses);
  }, [MAINcourse,data,courseID]);


  const onBook=(id)=>{
    if(id)router.push('/courses/'+id)
  }




  return (
    <div className="  py-6  flex flex-col gap-6 px-4 ">
      <p>
        <Link className="flex  items-center gap-2" href={"/dashboard"}>
          <AiOutlineArrowLeft size={30} /> back
    
        </Link>
      </p>

      <div
        className={`${
          show ? "hidden" : "block"
        }  h-[100vh] rounded-md  gap-8 top-0 fixed bg-[#ffffff22] backdrop-blur-md  w-[99vw]`}
      >
        <p className="p-4">
          <Link className="flex  items-center gap-2" href={"/dashboard"}>
            <AiOutlineArrowLeft size={30} /> back
          </Link>
        </p>

        <div className=" grid rounded-md   text-white justify-center h-full place-content-center items-center w-full  ">
          <div className=" bg-[#000000a7] flex justify-center items-center flex-col p-4 rounded-lg gap-4">
            <h1>Checkout</h1>
            <h3>Order details</h3>
            <p>₦ 2000</p>

            <button
              onClick={() => {
                handleFlutterPayment({
                  callback: (response) => {
                    setShow(true);
                    console.log(response);

                    closePaymentModal(); // this will close the modal programmatically
                  },
                  onClose: () => {},
                });
              }}
              className=" bg-blue-800 text-white p-4  rounded-md"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
         {courseID}
      {
        popularCoursses.filter(course=>course.id===(courseID-5)).map(course=>(

            <>
          
            <div className=" flex justify-between items-center">
        <Link href={"/dashboard"}>
          <img
            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2F7fe4e3_e9631d35de724b12b75a50f50d0c76fd~mv2.jpg%2Fv1%2Fcrop%2Fx_0%2Cy_60%2Cw_395%2Ch_275%2Ffill%2Fw_553%2Ch_385%2Cal_c%2Clg_1%2Cq_80%2Cenc_auto%2FBiology.jpg&tbnid=nSZlMk1giSk9XM&vet=12ahUKEwjIrbzm2v-AAxW1mCcCHVW7B8kQMygTegUIARCeAQ..i&imgrefurl=https%3A%2F%2Fwww.titaniumtutors.co.uk%2Fbiology-tutor&docid=4Pa3Ql_UH04WLM&w=553&h=385&q=biology&ved=2ahUKEwjIrbzm2v-AAxW1mCcCHVW7B8kQMygTegUIARCeAQ"
            alt=""
          />
        </Link>
        <p className=" font-semibold w-[70%] text-center text-sm ">
        {course.title}
        </p>
        
        <img src="/course-icon-black.svg" alt="" />
      </div>
      <img src={course.cover_image} alt="" />
      <p>
       
       {course.description}
      </p>
      <div className=" flex justify-between items-center">
        <p className=" text-sm font-bold">Beginners</p>
        <div onClick={()=>router.push(course.video_file)} className=" flex gap-1.5 items-center">
          <img src="/play-small.svg" alt="" />
          <p className=" text-sm ">1 videos</p>
        </div>
        <div onClick={()=>router.push(course.pdf)} className=" flex gap-1.5 items-center">
          <img src="/pdf.svg" alt="" />
          <p  className=" text-sm ">PDF</p>
        </div>

        <Link className=" flex gap-1.5 items-center" href={"/courses/45/quiz"}>
          <img src="/question.svg" alt="" />
          <p className=" text-sm ">Quiz</p>
        </Link>
      </div>
      <p className=" font-black mt-4">Videos</p>
      <div className=" flex flex-wrap justify-between gap-6">
        {[
          { image: course.cover_image
            , topic: course.title},
        ].map((item, i) => (
          <div onClick={()=>router.push(course.video_file)}  className=" w-[190px]  overflow-hidden flex flex-col gap-1.5">
            <img src={item.image} alt="" className=" rounded-lg" />
            <p className="text-sm">{item.topic}</p>
          </div>
        ))}
      </div>
      <p className=" font-black mt-4">Books</p>
        <div className=" grid grid-cols-2 gap-3">
           {popularCoursses.map((book,i)=>(
          <div onClick={()=>{
            setCourseID(book.id+5)
             onBook(book.id+5)
           
          }} key={i} className=" grid grid-cols-5 flex-wrap justify-between gap-6">
    
           <div    className=" w-[130px]  overflow-hidden flex flex-col gap-1.5">
                <img src={book.cover_image} alt="" className=" rounded-lg" />
                <p className="text-sm">{book.title}</p>
              </div>
        
             
           
        </div>
      ))}
        </div>
     
      {/* <div className=" flex flex-wrap justify-between gap-6">
        {[{ image: "/pic-1.png", topic: "Introduction to atoms" }].map(
          (item, i) => (
            <div className=" w-[190px]  overflow-hidden flex flex-col gap-1.5">
              <img src={item.image} alt="" className=" rounded-lg" />
              <p className="text-sm">{item.topic}</p>
            </div>
          )
        )}
      </div> */}
            </>
        ))
        }
      
    </div>
  );
};

export default page;
