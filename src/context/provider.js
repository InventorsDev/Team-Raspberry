// MyContextProvider.js
import React, { useState } from 'react';
import MyContext from './context';

const MyContextProvider = ({ children }) => {
    const [user,setUser]=useState({courseTitle:''})
    const [token,setToken]=useState("");
    const[PASS,setPASS]=useState('')
    const[profileImage,setProfileImage]=useState(null)
  return (
    <MyContext.Provider value={{user,PASS,setProfileImage,profileImage,setPASS,setUser,token,setToken }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
