// import React, { useEffect, useState } from "react";
// import { Heading, WrapperWelcome, WrapperWelcomeBox } from "./Styling";
// import { UserPage } from './UserPage'

// const url = "http://localhost:8080/secrets";


// export const Welcome = () => {
//   const [message, setMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   //Getting the accessToken from the browser's localStorage and sending it as the header "Authorization"
//   const accessToken = window.localStorage.getItem("accessToken")
//   const userId = window.localStorage.getItem("userId")


//   useEffect(() => {
//     setErrorMessage("");
//     fetch(url, {
//       method: "GET",
//       headers: { Authorization: accessToken }
//     })
//       .then(res => {
//         if (!res.ok) {
//           throw new Error("You need to sign in to view this page", JSON);
//         } else {
//           return res.json();
//         }
//       })
//       .then(json => setMessage(json.secret))
//       .catch(err => {
//         setErrorMessage(err.message);
//       });
//   }, [accessToken]);


//   return (
//     <div>
//       <WrapperWelcome>
//         {errorMessage && <div>{errorMessage}</div>}
//         {message && (
//           <WrapperWelcomeBox>
//             <Heading>You're logged in!</Heading>
//             <UserPage />
//           </WrapperWelcomeBox>
//         )}

//       </WrapperWelcome >
//     </div>
//   );
// };