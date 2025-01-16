import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [searchResults, setSearchResults] = useState([]); // State for search results
  const [isSearching, setIsSearching] = useState(false); // Loading indicator for search

  const navigate = useNavigate();
  const location = useLocation();

  const searchBoxRef = useRef(null); // Ref to handle outside click

  // Update login state on location or token change
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set true if token exists
  }, [location]); // Re-run this effect whenever the location changes

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    setIsLoggedIn(false); // Update state
    navigate("/login"); // Redirect to login page
  };

  // Check if the current path is login or signup
  const isLoginOrSignupPage =
    location.pathname === "/login" || location.pathname === "/signup";

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.trim()) {
        fetchFilteredCourses();
      } else {
        setSearchResults([]);
      }
    }, 300); // Delay for 300ms

    return () => clearTimeout(delayDebounce); // Cleanup timeout
  }, [searchTerm]);

  // Fetch filtered courses based on the search term
  const fetchFilteredCourses = async () => {
    setIsSearching(true); // Set loading state
    try {
      const response = await fetch(
        `http://localhost:4000/api/courses?type=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch courses");
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setIsSearching(false); // Reset loading state
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle the Enter key to navigate
  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      navigate(`/search-results?query=${searchTerm}`);
      setSearchResults([]); // Clear recommendations
    }
  };

  // Handle selecting a course from the list
  const handleSearchSelect = (courseId) => {
    navigate(`/search-results?query=${courseId}`);
    setSearchResults([]); // Clear recommendations
  };

  // Handle clicking outside the search box to close recommendations
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        setSearchResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-black text-white font-poppins flex items-center justify-between px-8 py-8">
      {/* Logo */}
      <div className="flex items-center space-x-6">
        <span className="text-2xl font-poppins font-bold">
          <a href="/">A2Z LearningPlatform</a>
        </span>
      </div>

      {/* Search */}
      {!isLoginOrSignupPage && (
        <div className="flex-1 mx-8" ref={searchBoxRef}>
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyPress={handleSearchKeyPress} // Handle Enter key
              placeholder="Search for anything"
              className="w-full py-2.5 px-12 text-sm font-poppins text-black rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <span className="absolute left-4 top-2.5 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
                />
              </svg>
            </span>

            {searchResults.length > 0 && (
              <ul className="absolute left-0 w-full bg-white text-black mt-2 rounded-md shadow-md z-10 max-h-60 overflow-auto">
                {searchResults.map((course) => (
                  <li
                    key={course.id}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSearchSelect(course.name)}
                  >
                    {course.name} - {course.type} (${course.price})
                  </li>
                ))}
              </ul>
            )}

            {isSearching && (
              <div className="absolute left-0 w-full bg-white text-black mt-2 rounded-md shadow-md z-10 p-2">
                Searching...
              </div>
            )}
          </div>
        </div>
      )}

      {/* Links */}
      <div className="flex items-center space-x-8">
        <a href="/pricing" className="text-base hover:text-orange-600">
          Plans & Pricing
        </a>
        <a href="/coursePage" className="text-base hover:text-orange-600">
          Courses
        </a>
        <a href="/about-us" className="text-base hover:text-orange-600">
          About us
        </a>

        {isLoggedIn ? (
          <>
            <a href="/profile-display" className="text-base hover:text-orange-600">
              Profile
            </a>
            <button
              onClick={handleLogout}
              className="text-sm py-2 px-5 font-semibold rounded-md bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-800 transition-colors"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="text-sm py-2 px-5 font-semibold rounded-md bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-800 transition-colors">
              <a href="/login">Login</a>
            </button>
            <button className="text-sm py-2 px-5 font-semibold text-orange-700 rounded-md bg-white bg-gradient-to-r hover:from-gray-300 hover:to-gray-400 transition-colors">
              <a href="/signup">Sign up</a>
            </button>
          </>
        )}
      </div>
    </nav>
  );
}






