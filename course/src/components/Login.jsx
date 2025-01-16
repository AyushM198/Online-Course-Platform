// import React from 'react'

// const Login = () => {
//   return (
//     <div>
//         <h1 className='text-2xl font-bold mb-6 text-center bg-blue-400'>login Page</h1>
//         <input type='text' placeholder='Enter Username'/>
//         <input type='password' placeholder='Enter Password'/>
//         <button>Login</button>
//     </div>
//   )
// }

// export default Login



// import React, { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleLogin = async(e) => {
//     e.preventDefault();

//     const response = await fetch("http://localhost:4000/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     })
//     const data = await response.json();
//     if (!validateEmail(email)) {
//       setError("Invalid email");
//     } else if (!password) {
//       setError("Password cannot be empty");
//     } else {
//       setError("");
//       alert("Login successful!");
//       // Proceed with login logic
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center"
//       // style={{
//       //   backgroundImage: "url('https://cdn.photoroom.com/v2/image-cache?path=gs://background-7ef44.appspot.com/backgrounds_v3/black/47_-_black.jpg')", // Replace with your desired image URL
//       // }}
//     >
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
//           Welcome Back
//         </h1>
//         <p className="text-gray-500 text-center mb-6">
//           Login to your account to continue
//         </p>
//         <form onSubmit={handleLogin} className="space-y-4">
//           {/* Email Input */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Email Address
//             </label>
//             <input
//               type="text"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className={`w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none ${
//                 error === "Invalid email" ? "border-red-500" : "border-gray-300"
//               }`}
//               placeholder="Enter your email"
//             />
//             {/* Error Message for Email */}
//             {error === "Invalid email" && (
//               <p className="text-sm text-red-500 mt-1">{error}</p>
//             )}
//           </div>

//           {/* Password Input */}
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
//               placeholder="Enter your password"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition duration-300"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-sm text-gray-500 text-center mt-4">
//           Don't have an account?{" "}
//           <a
//             href="#"
//             className="text-purple-600 font-medium hover:underline"
//           >
//             Sign up here
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import {useNavigate}from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Input validation before making the API request
    if (!validateEmail(email)) {
      setError("Invalid email");
      setSuccess(""); // Clear success message
      return;
    } else if (!password) {
      setError("Password cannot be empty");
      setSuccess(""); // Clear success message
      return;
    }

    setError(""); // Clear previous errors

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("userEmail", email); 
        localStorage.setItem("token", data.token);
        navigate("/");
        setSuccess("Login successful!");
        setError(""); 
        console.log("Login successful", data);
      } else {
        setError(data.message || "Login failed");
        setSuccess(""); 
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again.");
      setSuccess(""); // Clear success message
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Welcome Back
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Login to your account to continue
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none ${
                error === "Invalid email" ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full  py-2 rounded-lg  text-white  bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-800 transition-colors duration-300"
          >
            Login
          </button>
        </form>

        {/* Error Message */}
        {error && <p className="text-sm text-red-500 text-center mt-4">{error}</p>}

        {/* Success Message */}
        {success && <p className="text-sm text-green-500 text-center mt-4">{success}</p>}

        <p className="text-sm text-gray-500 text-center mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-orange-600 font-medium hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
