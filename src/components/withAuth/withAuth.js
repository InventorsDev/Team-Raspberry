import React, { useEffect, useState } from 'react';
import { auth } from '../../app/firebase';
import { useRouter } from 'next/navigation';
import AppContext from '../../context/context'
const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        // console.log(user);
        if (!user) {
          router.push('/signin'); // Redirect to login page if user is not authenticated
        }
      });
      return () => unsubscribe();
    }, []);

    
    return(
   
          <WrappedComponent {...props}   />
       
      
    )
    
    
    
  
  };
};

export default withAuth;
