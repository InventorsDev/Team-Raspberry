import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const InvalidAuth = () => {
  
  return (
    <div>
        <div className=" w-screen  flex justify-center items-center h-full p-4  text-white  bg-black">
            <div className="bg-[#ffffff32] h-full rounded-xl   w-[90vw] p-4 ">
               <h1 className=' text-center'>Secure Access Control for Our Application</h1>
               <br />
              
                <div className=" flex gap-5 justify-center items-center">
   <Link href={'/login'}>
                <button  className=" bg-slate-200 p-3 rounded-lg text-center text-red-700" >login</button>
               </Link>
              
               <br />
                <p>&</p>
                <br />
                <Link href={'/login'}>
                  <button  className=" rounded-lg p-3 bg-slate-200 text-center text-red-700" >SignUp</button>
                </Link>
                <br />
                <br />
                </div>
              <br />
              <br />
               
               <h2>Welcome to our application! We take your privacy and security seriously. Before you can access our platform's amazing features, we need to ensure that you are authorized to use it. Here's how you can get started:</h2>
               
  
               <div className=" p-3">
                <h2>1. Sign Up</h2>
                <p className="mt-6">
                If you are new to our platform, you'll need to create an account. Click on the "Sign Up" button, and you will be guided through the registration process. We'll ask for some basic information to set up your account securely.
                </p>
  
               </div>
               <div className=" p-3">
                <h2>2. Log In:</h2>
                <p className="mt-6">
                If you've already registered, click on the "Log In" button. Enter your credentials - your username or email and your password - to gain access to your account. Make sure to use a strong, unique password to keep your account safe.</p>
  
               </div>
               <div className=" p-3">
                <h2>3. Authorization:</h2>
                <p className="mt-6">
                Once you've logged in or signed up, our system will verify your identity and authorization. This step helps us protect your data and ensure that only authorized individuals can use our application.</p>
  
               </div>
               <div className=" p-3">
                <h2>4. Two-Factor Authentication (2FA):</h2>
                <p className="mt-6">
                For an extra layer of security, consider enabling two-factor authentication (2FA) in your account settings. 2FA adds an additional step to your login process, usually involving a temporary code sent to your mobile device. It significantly enhances the security of your account.</p>
  
               </div>
               <div className=" p-3">
                <h2>5. Need Help?</h2>
                <p className="mt-6">
                If you encounter any issues during the authorization process, or if you have any questions, our support team is here to assist you. Reach out to us through our dedicated support channels for prompt assistance.</p>
                <br />
                <br />
                <p >Thank you for choosing our platform. We are committed to providing you with a safe and secure environment to make the most of our application's features.
  
  </p>
  
               </div>
  
            </div>
        </div>
        
    </div>
  )
}

export default InvalidAuth
