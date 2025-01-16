// // import React from 'react'

// // const Register = () => {
// //   // const [Username,setUser]
// //   return (
// //     <div>
// //         <h1 className='text-2xl font-bold mb-6 text-center bg-blue-400'>Register Page</h1>
// //         <input type='text' placeholder='Enter Username'/>
// //         <input type='email' placeholder='Enter Email'/>
// //         <input type='password' placeholder='Enter Password'/>
// //         <button>Register</button>
// //     </div>
// //   )
// // }

// // export default Register



//Complete code of Register

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate(); 
const handleSubmit =async(e)=>{
  e.preventDefault();
  const response = await fetch("http://localhost:4000/register",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({name,email,password}),
  })
  if(response.ok){
    
    alert("User created successfully")
    navigate("/profile")
    
  }else{
    alert("User not created")
  }
  // const data = await response.json();
  // alert(data.message);
}
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]+$/; // Allows only letters and spaces
    return nameRegex.test(name);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!validateName(name)) {
      nameError = "Name must contain only letters and spaces.";
    }

    if (!validateEmail(email)) {
      emailError = "Invalid email address.";
    }

    if (password !== confirmPassword) {
      passwordError = "Passwords do not match.";
    }

    setError({ name: nameError, email: emailError, password: passwordError });

    if (!nameError && !emailError && !passwordError) {
      alert("Sign-up successful!");
      // Proceed with sign-up logic
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?nature,abstract')", // Replace with your own image URL
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Create an Account
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Sign up to get started with your journey!
        </p>
        <form onSubmit={handleSignup} className="space-y-4">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none ${
                error.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your name"
              required
            />
            {error.name && (
              <p className="text-sm text-red-500 mt-1">{error.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none ${
                error.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email"
              required
            />
            {error.email && (
              <p className="text-sm text-red-500 mt-1">{error.email}</p>
            )}
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
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none ${
                error.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Confirm your password"
              required
            />
            {error.password && (
              <p className="text-sm text-red-500 mt-1">{error.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-2 rounded-lg  text-white  bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-800 transition-colors duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-orange-600 font-medium hover:underline"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
