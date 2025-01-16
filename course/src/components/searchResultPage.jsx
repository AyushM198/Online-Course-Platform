// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// export default function SearchResultsPage() {
//   const location = useLocation();
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const queryParams = new URLSearchParams(location.search);
//   const query = queryParams.get("query");

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/api/courses?id=${query}`);
//         const data = await response.json();
//         setCourses(data);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, [query]);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Search Results</h1>
//       <div className="grid grid-cols-3 gap-6">
//         {courses.map((course) => (
//           <div key={course.id} className="border p-4 rounded shadow-sm">
//             <h2 className="text-xl font-semibold">{course.name}</h2>
//             <p>Type: {course.type}</p>
//             <p>Price: ${course.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SearchResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [allCourses, setAllCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState([]);

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/courses");
        const data = await response.json();
        setAllCourses(data);
        if (query) {
          const filteredData = data.filter((course) =>
            course.name.toLowerCase().includes(query.toLowerCase())
          );
          setFilteredCourses(filteredData);
        } else {
          setFilteredCourses([]);
        }
        setSuggestions(data.map((course) => course.name));
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [query]);

  const handleSuggestionClick = (courseName) => {
    navigate(`?query=${courseName}`);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <section className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Search Results for "{query || "All Courses"}"
        </h2>

        {/* Suggestions Bar */}
        <div className="flex overflow-x-auto gap-6 mb-10 pb-4 scrollbar-hide">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-800 whitespace-nowrap`}
            >
              {suggestion}
            </button>
          ))}
        </div>

        {filteredCourses.length === 0 ? (
          <p className="text-center text-gray-600">No courses found matching "{query}"</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course, index) => (
              <div
                key={index}
                className="bg-black rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => handleSuggestionClick(course.name)}
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
                  <button className="mt-auto w-full font-semibold py-2 bg-gradient-to-r from-orange-400 to-orange-600 hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-800 text-black rounded-full transition-all duration-300">
                    Join Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
