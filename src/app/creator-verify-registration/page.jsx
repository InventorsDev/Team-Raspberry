'use client'
import React from 'react'
import { useEffect } from 'react';
 
import { useSearchParams,usePathname,useRouter } from 'next/navigation'
 
const Page = () => {  

    
    useEffect(() => {

        const currentURL = window.location.href;

    const myURL = new URL(currentURL);
  const token= myURL.searchParams.get('token')
  const Url= myURL.searchParams.get('user_id')
   console.log(
   token+'====='+Url
   );
    
      }, []);
  return (
    <div>
      hello
    </div>
  )
}

export default Page
