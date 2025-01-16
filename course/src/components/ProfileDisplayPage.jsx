import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const [user, setUser] = useState(null); // Store user data
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const navigate = useNavigate();

    // Retrieve email from localStorage on page load
    const [email, setEmail] = useState(null);

    useEffect(() => {
        const storedEmail = localStorage.getItem("userEmail");
        if (storedEmail) {
            setEmail(storedEmail); // Set email from localStorage
        } else {
            navigate("/login"); // If email is not found, redirect to login page
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
                        setUser(data); // Set profile data
                    } else {
                        throw new Error("Failed to fetch profile data.");
                    }
                } catch (err) {
                    console.error(err);
                    setError("Failed to fetch profile data.");
                } finally {
                    setIsLoading(false);
                }
            };

            fetchUserProfile();
        }
    }, [email]);

    // Render loading state
    if (isLoading) return <div className="flex items-center justify-center h-screen">Loading...</div>;

    // Render error state
    if (error) return <div className="flex items-center justify-center h-screen">{error}</div>;

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            {user ? (
                <div className="w-96 bg-white p-6 rounded-lg shadow-lg">
                    {user.image && (
                        <div className="mb-4">
                            <img
                                src={user.image}
                                alt="Profile"
                                className="w-24 h-24 rounded-full object-cover mx-auto"
                            />
                        </div>
                    )}
                    <h1 className="text-2xl font-bold text-gray-700 mb-4">Welcome, {user.name}!</h1>
                    <p className="text-sm text-gray-600 mb-2">
                        <span className="font-semibold text-gray-700">Email:</span> {user.email}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                        <span className="font-semibold text-gray-700">Location:</span> {user.location || "Not provided"}
                    </p>
                    
                    <p className="text-sm text-gray-600 mb-4">
                        <span className="font-semibold text-gray-700">Bio:</span> {user.bio || "No bio available"}
                    </p>
                    <button
                        onClick={() => navigate("/update-profile")}
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Edit Profile
                    </button>
                </div>
            ) : (
                <div className="text-gray-700 text-center">
                    <p className="text-xl font-semibold mb-4">No profile found.</p>
                    <button
                        onClick={() => navigate("/create-profile")}
                        className="py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                        Create Profile
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
