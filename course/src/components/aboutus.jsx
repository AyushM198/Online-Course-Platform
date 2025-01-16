import React, { useState } from "react";

const AboutUs = () => {
  const [cursorPositionStory, setCursorPositionStory] = useState({ x: 0, y: 0 });
  const [cursorPositionGateway, setCursorPositionGateway] = useState({ x: 0, y: 0 });

  // Handle mouse move event for "Our Story" section
  const handleMouseMoveStory = (e) => {
    setCursorPositionStory({
      x: e.clientX,
      y: e.clientY,
    });
  };

  // Handle mouse move event for "Gateway Section"
  const handleMouseMoveGateway = (e) => {
    setCursorPositionGateway({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const imageStyleStory = {
    transform: `perspective(1000px) rotateX(${(cursorPositionStory.y - window.innerHeight / 2) / 20}deg) rotateY(${(cursorPositionStory.x - window.innerWidth / 2) / 20}deg)`,
    transition: "transform 0.1s ease-out",
  };

  const imageStyleGateway = {
    transform: `perspective(1000px) rotateX(${(cursorPositionGateway.y - window.innerHeight / 2) / 20}deg) rotateY(${(cursorPositionGateway.x - window.innerWidth / 2) / 20}deg)`,
    transition: "transform 0.1s ease-out",
  };

  return (
    <div className="bg-black text-white font-poppins">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-80"
        style={{
          backgroundImage: "url('https://st.depositphotos.com/1000350/2282/i/450/depositphotos_22823894-stock-photo-dark-concrete-texture.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="flex flex-col items-center justify-center h-full relative z-10">
          <h1 className="text-4xl font-bold hover:text-purple-500 transition duration-300">About Us</h1>
          <p className="mt-4 text-gray-500 font-semibold text-5xl hover:text-blue-400 transition duration-300">Building a world of endless opportunities.</p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Your Vision Our Expertise -{" "}
            <span className="text-purple-500 hover:text-teal-500 transition duration-300">Get Noticed</span>{" "}
            <span className="text-blue-500 hover:text-purple-500 transition duration-300">Generate Leads</span>{" "}
            <span className="text-teal-500 hover:text-blue-500 transition duration-300">Dominate</span>
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div
              onMouseMove={handleMouseMoveStory} // Mouse move event specific to this section
            >
              <img
                src="https://st3.depositphotos.com/1350793/13201/i/450/depositphotos_132018592-stock-photo-online-courses-concept-with-hand.jpg"
                alt="Team"
                className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                style={imageStyleStory} // Apply the 3D transformation here
              />
            </div>
          </div>
          <div>
            <p className="text-gray-400 leading-relaxed">
              "At A2Z Learning, we are committed to empowering learners across
              the globe by providing a wide range of expertly designed courses
              tailored to meet the diverse needs of today’s professionals and
              enthusiasts..."
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white hover:text-purple-500 transition duration-300">10K+</h3>
                <p className="text-gray-400">Active Users</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white hover:text-blue-500 transition duration-300">15K+</h3>
                <p className="text-gray-400">Satisfied Customers</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white hover:text-teal-500 transition duration-300">10K+</h3>
                <p className="text-gray-400">Certifications</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white hover:text-purple-500 transition duration-300">45K+</h3>
                <p className="text-gray-400">Worldwide Honors</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gateway Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white hover:text-purple-500 transition duration-300">
              Your Gateway To Online Excellence{" "}
              <span className="text-blue-500 hover:text-teal-500 transition duration-300">Dream Big.</span>
            </h2>
            <p className="text-gray-400 mt-4">
              We believe in turning dreams into reality. With a diverse range
              of courses and expert guidance, we empower you to dream big, learn
              passionately, and achieve greatness in every step of your journey.
            </p>
            <h3 className="mt-6 text-xl text-white font-semibold">
              Key Benefits of Our Platform
            </h3>
            <ul className="mt-4 text-gray-400 space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> Personalized learning tailored to your goals.
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> Global networking opportunities with peers.
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> Access to cutting-edge tools and resources.
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> 24/7 support to guide you at every step.
              </li>
            </ul>
          </div>
          <div
            className="relative"
            onMouseMove={handleMouseMoveGateway} // Mouse move event specific to this section
          >
            <img
              src="https://cdn.pixabay.com/photo/2018/05/19/00/53/online-education-3412473_1280.jpg"
              alt="Learning"
              className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
              style={imageStyleGateway} // Apply the 3D transformation here
            />
            <div className="absolute top-0 left-0 w-24 h-24 bg-purple-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-blue-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
          </div>
        </div>
      </div>
      {/* Features & Vision Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold">
            Our <span className="text-purple-500">Vision</span> &{" "}
            <span className="text-blue-500">Features</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Inspiring transformation through innovation, accessibility, and an unwavering commitment to excellence.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 md:px-8">

        {/* Vision Section */}
        <div className="bg-gray-900 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-purple-500">Our Vision</h3>
          <p className="text-gray-400 mt-4">
            To create a world where education fuels empowerment and opportunity for everyone, everywhere.
          </p>
          <ul className="mt-6 space-y-6">
            <li className="flex items-center ">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-lightbulb"></i>
              </div>
              <p className="text-gray-300">
                Pioneering the future of education with cutting-edge innovations.
              </p>
            </li>
            <li className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-globe"></i>
              </div>
              <p className="text-gray-300">
                Fostering a global community of passionate learners and educators.
              </p>
            </li>
            <li className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <p className="text-gray-300">
                Driving meaningful change through innovative education solutions.
              </p>
            </li>
          </ul>
        </div>

        {/* Features Section */}
        <div className="bg-gray-900 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-500">Our Features</h3>
          <p className="text-gray-400 mt-4">
            Discover what makes us stand out as a leader in online education.
          </p>
          <ul className="mt-6 space-y-6">
            <li className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-user-graduate"></i>
              </div>
              <p className="text-gray-300">
                Courses designed by industry experts and educators.
              </p>
            </li>
            <li className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-tools"></i>
              </div>
              <p className="text-gray-300">
                Hands-on learning with cutting-edge tools and technologies.
              </p>
            </li>
            <li className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-award"></i>
              </div>
              <p className="text-gray-300">
                Certifications that boost your career prospects.
              </p>
            </li>
          </ul>
        </div>


      </div>
      </div>
      </div>
      );
};

      export default AboutUs;
