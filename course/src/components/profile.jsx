// import React, { useState } from "react";

// const ProfilePage = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [userInfo, setUserInfo] = useState({
//     name: "Amit Kumar",
//     email: "amit.kumar@example.com",
//     bio: "A passionate web developer and lifelong learner. Currently exploring full-stack development and AI.",
//     location: "Mumbai, India",
//     avatar: "https://randomuser.me/api/portraits/men/45.jpg",
//   });

//   const [newAvatar, setNewAvatar] = useState(null);

//   const handleEdit = () => setIsEditing(!isEditing);

//   const handleSave = () => {
//     setIsEditing(false);
//     if (newAvatar) {
//       setUserInfo({ ...userInfo, avatar: newAvatar });
//     }
//     // You can add logic to save the changes, such as sending the new avatar to the backend
//   };

//   const handleAvatarChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setNewAvatar(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 text-white">
//           <div className="flex items-center space-x-4">
//             <img
//               src={newAvatar || userInfo.avatar}
//               alt="Profile"
//               className="w-20 h-20 rounded-full object-cover border-4 border-white"
//             />
//             <div>
//               <h2 className="text-3xl font-bold">{userInfo.name}</h2>
//               <p className="text-lg">{userInfo.email}</p>
//               <p className="text-sm mt-2">{userInfo.location}</p>
//             </div>
//           </div>
//           <div className="mt-4">
//             {isEditing && (
//               <label
//                 htmlFor="avatar-upload"
//                 className="relative inline-flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-5 py-3 rounded-full shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 transform"
//               >
//                 <span className="mr-2">Change Profile Photo</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-5 h-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 12l5 5L20 7"
//                   />
//                 </svg>
//               </label>
//             )}
//             <input
//               type="file"
//               id="avatar-upload"
//               accept="image/*"
//               onChange={handleAvatarChange}
//               className="hidden"
//             />
//           </div>
//         </div>
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-2xl font-semibold">About Me</h3>
//             <button
//               onClick={handleEdit}
//               className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
//             >
//               {isEditing ? "Cancel" : "Edit"}
//             </button>
//           </div>
//           {isEditing ? (
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   value={userInfo.name}
//                   onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
//                   className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   value={userInfo.email}
//                   onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
//                   className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Bio</label>
//                 <textarea
//                   value={userInfo.bio}
//                   onChange={(e) => setUserInfo({ ...userInfo, bio: e.target.value })}
//                   className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Location</label>
//                 <input
//                   type="text"
//                   value={userInfo.location}
//                   onChange={(e) => setUserInfo({ ...userInfo, location: e.target.value })}
//                   className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <button
//                 onClick={handleSave}
//                 className="px-4 py-2 bg-green-500 text-white rounded-lg mt-4 hover:bg-green-600 focus:outline-none"
//               >
//                 Save Changes
//               </button>
//             </div>
//           ) : (
//             <div>
//               <p className="text-gray-600">{userInfo.bio}</p>
//               <div className="mt-6">
//                 <h4 className="text-lg font-semibold">Location:</h4>
//                 <p className="text-gray-500">{userInfo.location}</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
