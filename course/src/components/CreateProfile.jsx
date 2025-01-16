// // ProfileForm.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Updated import

// const ProfileForm = () => {
//     const [formData, setFormData] = useState({ name: "", email: "", bio: "" });
//     const [error, setError] = useState(null);
//     const [success, setSuccess] = useState(false);
//     const navigate = useNavigate(); // Using useNavigate instead of useHistory

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch("http://localhost:4000/api/profile", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 setSuccess(true);
//                 setError(null);
//                 // Redirect to the profile page after successful form submission
//                 navigate("/login"); // Updated with navigate
//             } else {
//                 throw new Error("Failed to save profile.");
//             }
//         } catch (err) {
//             setError("Failed to save profile.");
//             console.error(err);
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center mt-10 p-6 rounded-lg shadow-lg w-96 bg-white">
//             <h1 className="text-2xl font-bold mb-6 text-gray-700">Create Your Profile</h1>

//             {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}
//             {success && <div className="text-green-500 mb-4 text-sm">Profile created successfully!</div>}

//             <form onSubmit={handleSubmit} className="w-full">
//                 <div className="mb-4">
//                     <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Name:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="bio" className="block text-sm font-semibold text-gray-600">Bio:</label>
//                     <textarea
//                         id="bio"
//                         name="bio"
//                         value={formData.bio}
//                         onChange={handleChange}
//                         className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     ></textarea>
//                 </div>

//                 <button
//                     type="submit"
//                     className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 >
//                     Save Profile
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default ProfileForm;


// ProfileForm.jsx



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Updated import

// const ProfileForm = () => {
//     const [formData, setFormData] = useState({ name: "", email: "", bio: "" });
//     const [error, setError] = useState(null);
//     const [success, setSuccess] = useState(false);
//     const navigate = useNavigate(); // Using useNavigate instead of useHistory

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch("http://localhost:4000/api/profile", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 setSuccess(true);
//                 setError(null);
//                 // Redirect to the profile page after successful form submission
//                 navigate("/login"); // Updated with navigate
//             } else {
//                 throw new Error("Failed to save profile.");
//             }
//         } catch (err) {
//             setError("Failed to save profile.");
//             console.error(err);
//         }
//     };

//     return (
//         <div className="flex items-center justify-center h-screen bg-gray-100"> {/* Updated to center align */}
//             <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg w-96 bg-white">
//                 <h1 className="text-2xl font-bold mb-6 text-gray-700">Create Your Profile</h1>

//                 {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}
//                 {success && <div className="text-green-500 mb-4 text-sm">Profile created successfully!</div>}

//                 <form onSubmit={handleSubmit} className="w-full">
//                     <div className="mb-4">
//                         <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Name:</label>
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             required
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email:</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             required
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="bio" className="block text-sm font-semibold text-gray-600">Bio:</label>
//                         <textarea
//                             id="bio"
//                             name="bio"
//                             value={formData.bio}
//                             onChange={handleChange}
//                             className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                         ></textarea>
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     >
//                         Save Profile
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ProfileForm;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "",location: "", bio: "", image: null });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prev) => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:4000/api/profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                setSuccess(true);
                setError(null);
                navigate("/login");
            } else {
                throw new Error("Failed to save profile.");
            }
        } catch (err) {
            setError("Failed to save profile.");
            console.error(err);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg w-96 bg-white">
                <h1 className="text-2xl font-bold mb-6 text-gray-700">Create Your Profile</h1>

                {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}
                {success && <div className="text-green-500 mb-4 text-sm">Profile created successfully!</div>}

                <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Location:</label>
                        <input
                            
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="bio" className="block text-sm font-semibold text-gray-600">Bio:</label>
                        <textarea
                            id="bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="image" className="block text-sm font-semibold text-gray-600">Profile Image:</label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Save Profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfileForm;
