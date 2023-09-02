'use client'
import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import firebase, { auth } from "./firebase"
import React, { useState, useEffect } from 'react';
import MyContextProvider from'../context/provider'
import { onAuthStateChanged } from 'firebase/auth'
const inter = Inter({ subsets: ['latin'] })

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "100", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }




export default function RootLayout({ children }) {
  const [user, setUser] = useState({});
const [name, setName] = useState('');
const[Admin,setAdmin]=useState(false)
useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    setUser(user);

  });
}, []);
const userImage=user?.photoURL|| ''
const userName=user?.displayName|| ''


  return (
    <html lang="en"> 
      <MyContextProvider>
      <body className={`${montserrat.className}`} >
     
           {children}
       
       
        
        </body> 
        </MyContextProvider>
    </html>
  )
}