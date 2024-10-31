// import React, { useEffect,useState } from 'react';
// import {auth , db} from './Firebase';
// import { doc, getDoc } from "firebase/firestore";
// import EmployeeData from './Crud_op/Employee_data';

// function Profile() {
//     const [userDetail, setUserDetail] = useState(null);
//     const fetchUserData = async() =>{
//      auth.onAuthStateChanged(async (user) =>{
//         console.log(user);
//         const docRef = doc(db,"Users", user.uid);
//         const docSnap = await getDoc(docRef);
//         if(docSnap.exists()){
//             setUserDetail(docSnap.data());
//             console.log(docSnap.data());
//         }
//         else{
//             console.log("User is not logged in");
//         }
//      });
//     };
//     useEffect(()=>{
//         fetchUserData()
//     },[ ]);

//     async function handleLogout(){
//       try {
//         await auth.signOut();
//         window.location.href="/login"
//         console.log("User succesfully Logout");
//       } catch (error) {
//         console.log("Error Logging out:" ,error.message); 
//       }
//     }
//   return (
//     <div>
           
//         { userDetail ? (
//             <>
//             <h3>Welcome {userDetail.firstName}</h3>
//             <div>
//                 <p>Email:{userDetail.email}</p>
//                 <p>First Name:{userDetail.firstName}</p>
//                 <p>Last Name:{userDetail.lastName}</p>
//             </div>
//             <button className='btn btn-primary' onClick={handleLogout}>
//                 Logout
//             </button>
//             </>
//         ) :(
//             <p>Loading........</p>

//         )}

//              <EmployeeData />
//     </div>

//   );
// }

// export default Profile


// import React, { useEffect, useState } from 'react';
// import { auth, db } from './Firebase';
// import { doc, getDoc } from "firebase/firestore";
// import EmployeeData from './Crud_op/Employee_data';

// function Profile() {
//     const [userDetail, setUserDetail] = useState(null);

//     const fetchUserData = async () => {
//         auth.onAuthStateChanged(async (user) => {
//             if (user) {
//                 const docRef = doc(db, "Users", user.uid);
//                 const docSnap = await getDoc(docRef);
//                 if (docSnap.exists()) {
//                     setUserDetail(docSnap.data());
//                 } else {
//                     console.log("User is not logged in");
//                 }
//             }
//         });
//     };

//     useEffect(() => {
//         fetchUserData();
//     }, []);

//     async function handleLogout() {
//         try {
//             await auth.signOut();
//             window.location.href = "/login";
//         } catch (error) {
//             console.log("Error Logging out:", error.message);
//         }
//     }

//     return (
//         <div className="profile-container">
//             {userDetail ? (
//                 <>
//                     <h3>Welcome {userDetail.firstName}</h3>
//                     <div className="user-details">
//                         <p>Email: {userDetail.email}</p>
//                         <p>First Name: {userDetail.firstName}</p>
//                         <p>Last Name: {userDetail.lastName}</p>
//                     </div>
//                     <button className='btn btn-primary' onClick={handleLogout}>
//                         Logout
//                     </button>
//                 </>
//             ) : (
//                 <p>Loading........</p>
//             )}
//             <EmployeeData />
//         </div>
//     );
// }

// export default Profile;



import React, { useEffect, useState } from 'react';
import { auth, db } from './Firebase';
import { doc, getDoc } from 'firebase/firestore';
import EmployeeData from './Crud_op/Employee_data';
import './Profile.css';

function Profile() {
    const [userDetail, setUserDetail] = useState(null);

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const docRef = doc(db, "Users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserDetail(docSnap.data());
                }
            }
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleLogout = async () => {
        await auth.signOut();
        window.location.href = "/login";
    };

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <h3>Dashboard</h3>
                <ul>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>CRUD Operations</li>
                    <li onClick={handleLogout}>Logout</li>
                </ul>
            </div>
            <div className="main-content">
                <div className="top-bar">
                    {userDetail && (
                        <h2>Welcome, {userDetail.firstName} {userDetail.lastName}</h2>
                    )}
                </div>
                <div className="profile-details">
                    {userDetail ? (
                        <>
                            <p>Email: {userDetail.email}</p>
                            <p>First Name: {userDetail.firstName}</p>
                            <p>Last Name: {userDetail.lastName}</p>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <EmployeeData />
            </div>
        </div>
    );
}

export default Profile;
