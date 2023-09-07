// verifyClient.js (or verifyClient.ts if using TypeScript)

// verifyClient.js (or verifyClient.ts if using TypeScript)

'use client'

import { useRouter } from 'next/router';
import { useEffect } from 'react';
 
import { useSearchParams, } from 'next/navigation'
 
function VerifyClient() {

//   const searchParams = useSearchParams();
//   const user_id = searchParams.get('user_id');
//   const token = searchParams.get('token');
// console.log(user_id);

  // useEffect(() => {
  //   // Extract user_id and token from the query parameters in the URL
  //   const queryParams = new URLSearchParams(window.location.search);
  //   const user_id = queryParams.get("user_id");
  //   const token = queryParams.get("token");

  //   // Make a call to the verification endpoint
  //   fetch(`http://localhost:5500/creator-verify-registration/?user_id=${user_id}&token=jjj`)
  //     .then((response) => {
  //       if (response.status === 200) {
  //         // Verification successful, redirect to success page
  //         router.push('/verification-success');
  //       } else {
  //         // Verification unsuccessful, redirect to failure page
  //         router.push('/verification-failure');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error verifying email:', error);
  //     });

  //     console.log(user_id + token);
  // }, []);




  useEffect(() => {
    const user_id = new URLSearchParams(window.location.search).get("user_id");
    const token = new URLSearchParams(window.location.search).get("token");
    
    fetch(`http://localhost:5500/creator-verify-registration/?user_id=MTU&token=bu3tkc-78e4cb55de0422da7731b1b2c2155674`)
      .then((response) => {
        if (response.status === 200) {
          // Verification successful
        } else {
          // Verification unsuccessful
        }
      })
      .catch((error) => {
        console.error('Error verifying email:', error);
      });
      console.log(token,user_id);

    const myURL = new URL(`http://locahost:5500/creator-verify-registration/?user_id=MTU&token=bu3tkc-78e4cb55de0422da7731b1b2c2155674`);
myURL.searchParams.forEach((value, name, searchParams) => {
  console.log(name+":"+value);
});
  }, []);



  return <div>Verifying email...</div>;
}

export default VerifyClient;
