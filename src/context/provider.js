// MyContextProvider.js
import React, { useState } from 'react';
import MyContext from './context';

const MyContextProvider = ({ children }) => {
    const [user,setUser]=useState({courseTitle:''})

    const [token,setToken]=useState("");
    const[PASS,setPASS]=useState('')
    const[profileImage,setProfileImage]=useState(null)
    const[courseID,setCourseID]=useState(null)  
      const [typeOfUser,setTypeOfUser]=useState(true)
  return (
    <MyContext.Provider value={{user,typeOfUser,setTypeOfUser,setCourseID,courseID,PASS,setProfileImage,profileImage,setPASS,setUser,token,setToken }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
