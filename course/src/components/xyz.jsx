import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const categories = [
    "Data Science", "Python", "Web Development", "Communication", "Artificial Intelligence",
    "Machine Learning", "Cloud Computing", "Blockchain", "Cybersecurity",
    "Digital Marketing", "Business Analytics", "Project Management", "Graphic Design",
    "Game Development", "Mobile Development"
  ];

  const [allCourses, setAllCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const cardsRef = useRef(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/courses"); // Replace with your API URL
        const data = await response.json();
        setAllCourses(data);
        setFilteredCourses(data); // Default to all courses
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  const filterCoursesByCategory = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredCourses(allCourses);
    } else {
      const filtered = allCourses.filter((course) => course.category === category);
      setFilteredCourses(filtered);
    }
  };

  const scrollLeft = () => {
    cardsRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    cardsRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the desired route
    navigate("/joinCourse"); // Replace '/course-details' with your desired path
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Unlock Your Potential with Every Course
        </h2>
        <p className="text-gray-600 text-center mb-12">
          From foundational knowledge to advanced expertise, A2Z Learning helps you grow professionally.
        </p>

        {/* Categories */}
        <div className="flex overflow-x-auto gap-6 mb-10 pb-4 scrollbar-hide">
          <button
            onClick={() => filterCoursesByCategory("All")}
            className={`px-6 py-3 rounded-full text-sm font-semibold text-white ${selectedCategory === "All" ? "bg-orange-600" : "bg-gradient-to-r from-orange-400 to-orange-600"} hover:from-orange-600 hover:to-orange-800 whitespace-nowrap`}
          >
            All
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => filterCoursesByCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-semibold text-white ${selectedCategory === category ? "bg-orange-600" : "bg-gradient-to-r from-orange-400 to-orange-600"} hover:from-orange-600 hover:to-orange-800 whitespace-nowrap`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Scrollable Cards */}
        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-gray-200 shadow hover:shadow-md transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Cards Container */}
          <div
            ref={cardsRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          >
            {filteredCourses.map((course, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-center bg-black rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-80"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="p-6 flex flex-col">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {course.name}
                  </h3>
                  <div className="text-sm text-gray-300 mb-4">
                    <p>{course.instructor}</p>
                    <p>{course.students} students</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                    <div className="flex items-center space-x-2">
                      {/* Star Icon for Reviews */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400 cursor-pointer"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      <span>{course.rating}</span>
                    </div>
                    <span>{course.level}</span>
                  </div>
                  <button
      className="mt-auto w-full font-semibold py-2 bg-gradient-to-r from-orange-400 to-orange-600 hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-800 text-black rounded-full transition-all duration-300"
      onClick={handleClick}
    >
      Join Course
    </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-gray-200 shadow hover:shadow-md transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
