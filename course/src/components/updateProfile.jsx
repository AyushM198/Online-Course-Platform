import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UpdateProfilePage = () => {
    const [formData, setFormData] = useState({ name: "", email: "", bio: "", location: "", image: null });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState(null);

    useEffect(() => {
        const storedEmail = localStorage.getItem("userEmail");
        if (storedEmail) {
            setEmail(storedEmail);
        } else {
            navigate("/login");
        }
    }, [navigate]);

    useEffect(() => {
        if (email) {
            const fetchUserProfile = async () => {
                try {
                    const response = await fetch(`http://localhost:4000/api/profile/${encodeURIComponent(email)}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                    if (response.ok) {
                        const data = await response.json();
                        setFormData({ ...data, image: null }); // Set initial data
                    } else {
                        throw new Error("Failed to fetch profile data.");
                    }
                } catch (err) {
                    setError("Failed to fetch profile data.");
                } finally {
                    setIsLoading(false);
                }
            };

            fetchUserProfile();
        }
    }, [email]);

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
            const response = await fetch(`http://localhost:4000/api/profile/${encodeURIComponent(email)}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess(true);
                setError(null);
                setTimeout(() => navigate("/profile-display"), 2000);
            } else {
                throw new Error("Failed to update profile.");
            }
        } catch (err) {
            setError("Failed to update profile.");
        }
    };

    if (isLoading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
    if (error) return <div className="flex items-center justify-center h-screen text-red-500">{error}</div>;

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-96 bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-gray-700 mb-4">Update Your Profile</h1>

                {success && <div className="text-green-500 mb-4 text-sm">Profile updated successfully!</div>}
                {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}

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
                            disabled
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="location" className="block text-sm font-semibold text-gray-600">Location:</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                        Update Profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfilePage;
