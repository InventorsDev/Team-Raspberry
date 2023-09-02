import axios from "axios";
import React, { useContext, useEffect,useRef, useState } from "react";
import MyContextProvider from "../../context/context";
import Cookies from 'js-cookie';
import InvalidAuth from "../invalidAuth/InvalidAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Save = () => {
  const { token,setToken,setPASS,PASS, setUser,setProfileImage,profileImage, user } = useContext(MyContextProvider);



 
  const cokkieToken = Cookies.get('token'); 



if (cokkieToken === '') {
return (<InvalidAuth />)


}
else{


  


  const profilePictureRef = useRef(null);

    
  const [formData, setFormData] = useState({
    creator_email_verified: false,
    date_of_birth: null,
    email:'',
  });


  useEffect(() => { 
      
    setToken(cokkieToken)
  if (token) {
    const config = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };
 
    axios
      .get('https://unicdata.pythonanywhere.com/profile', config)
      .then((res) => {
        // Handle successful response here
        console.log(res.data);
        setUser({ ...user, ...res.data });
        setFormData({...formData,...res?.data})
        setToken(token); // Set the token here
      })
      .catch((err) => {
        toast.error('Invalid credentials try again')
        console.log(err);
      });
  }
}, [token]);

  console.log(user?.email);

  const handleInputChange = (e) => {
  

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const [profilePicture, setProfilePicture] = useState(null);
  const fileInputRef = useRef(null);

  

 

  const handleSave = async(e) => {
    e.preventDefault();
    let cokkieToken = Cookies.get('token');
   

    const config = {
       headers: {
          Authorization: `Token ${cokkieToken}`,
          'Content-Type': 'multipart/form-data', // Set content-type to 'multipart/form-data' for file uploads
          },
    };
    const newformData = new FormData();
    newformData.append('username', formData?.username);
    newformData.append('first_name', formData?.first_name);
    newformData.append('date_of_birth', formData?.date_of_birth);
    newformData.append('last_name', formData?.last_name);
    newformData.append('gender', formData?.gender);
    // newformData.append('profile_picture', profilePicture);
  

    await axios
       .put('https://unicdata.pythonanywhere.com/profile', newformData, config)
       .then((res) => {
          // Handle successful response here
          console.log(res.data);
          toast.success("Profile Updated Succesfully ")
          setUser({ ...user, ...res.data });
         
          setToken(token); // Set the token here
       })
       .catch((err) => {
          toast.error('Invalid credentials try again')
          console.log(err);
       });
    
  };

  

  return (
    <>
      <div className=" mt-[30px] flex gap-8 items-center">
  <div className="bg-gray-400 w-24 h-24 rounded-full flex items-center justify-center">
    {/* You can place an avatar or user icon here */}
    {profileImage?(
      
       <img
       

       src={profileImage}
       alt="Profile"
       className="w-full h-full object-cover rounded-full"
     />
    ) : (
      "No Picture"
    )}
  </div>
 
      
    
        <button  className="bg-[#37494E] px-6 py-2 rounded-full text-white"   
       onClick={() => fileInputRef.current.click()} >
          Change {console.log(profilePicture)}
        </button> 
        <input
          type="file"
          name="profile_picture"
          accept="image/*"
          ref={fileInputRef}
          onChange={()=>{
            const file = fileInputRef.current.files[0];
       
           
            // setFormData({...formData,profile_picture:file})              
            setProfilePicture(file);



            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setProfileImage(reader.result);
              };
              reader.readAsDataURL(file);
            }

         
          }}
          style={{ display: "none" }}
        />

      </div>

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
      <div className=" mt-[50px] flex flex-col gap-7">
        <div className=" border border-primary-green h-[60px] rounded-full p-2">
          <p className=" bg-white w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm font-extralight whitespace-nowrap">
            UserName 
          </p>
          <input
            required
            className="w-full h-full bg-transparent outline-none px-3"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className=" border border-primary-green h-[60px] rounded-full p-2">
          <p className=" bg-white w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm font-extralight whitespace-nowrap">
          first_name
          </p>
          <input
            required
            className="w-full h-full bg-transparent outline-none px-3"
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
          />
        </div>
        <div className=" border border-primary-green h-[60px] rounded-full p-2">
          <p className=" bg-white w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm font-extralight whitespace-nowrap">
          last_name
          </p>
          <input
            required
            className="w-full h-full bg-transparent outline-none px-3"
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
          />
        </div>
        <div className=" border border-primary-green h-[60px] rounded-full p-2">
          <p className=" bg-white w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm font-extralight whitespace-nowrap">
          gender
          </p>
          <input
            required
            className="w-full h-full bg-transparent outline-none px-3"
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          />
        </div>
        <div className=" border cursor-not-allowed bg-slate-300 text-gray-400 border-primary-green h-[60px] rounded-full p-2">
          <p className=" bg-slate-300 w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm font-extralight whitespace-nowrap">
            Email
          </p>
          <input
           
            disabled
            className="w-full  h-full bg-transparent outline-none px-3"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        
        <div className=" border border-primary-green h-[60px] rounded-full p-2">
          <p className=" bg-white w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm font-extralight whitespace-nowrap">
            DOB
          </p>
          <input
            required
            className="w-full h-full bg-transparent outline-none px-3"
            type="date"
            name="date_of_birth"
            pattern="\d{4}-\d{2}-\d{2}"
            title="Please enter a date in the YYYY-MM-DD format."
            value={formData.date_of_birth}
            onChange={handleInputChange}
          />
        </div>
        <button
          className=" bg-primaryButton h-[60px] rounded-full text-white"
          onClick={(e) => handleSave(e)}
        >
          Save
        </button>
      </div>
      
    </>
  );
};
};

export default Save;