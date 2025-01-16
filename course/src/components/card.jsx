import React from 'react'

const Card = () => {
    return (
        <>
{/* Courses Section - New Cards with Join Course Button and Sliding Effect */}
<section id="courses" className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <h3 className="text-3xl font-semibold text-center mb-12">Explore Our Courses</h3>
    <div className="relative">
      {/* Horizontal Scroll Wrapper */}
      <div className="overflow-x-auto no-scrollbar flex space-x-8 py-4">

        {/* Web Development Card */}
        <div className="border p-6 rounded-lg shadow group transition-transform transform hover:scale-105 hover:shadow-xl w-80 flex-shrink-0">
          <img src="https://via.placeholder.com/300x200" alt="Web Development" className="w-full h-48 object-cover rounded-lg mb-4"/>
          <h4 className="text-xl font-bold mb-2">Web Development</h4>
          <p>Learn how to build responsive websites and web applications using HTML, CSS, JavaScript, and more.</p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Join Course
          </button>
        </div>

        {/* Data Science Card */}
        <div className="border p-6 rounded-lg shadow group transition-transform transform hover:scale-105 hover:shadow-xl w-80 flex-shrink-0">
          <img src="https://via.placeholder.com/300x200" alt="Data Science" className="w-full h-48 object-cover rounded-lg mb-4"/>
          <h4 className="text-xl font-bold mb-2">Data Science</h4>
          <p>Master data analysis, visualization, and machine learning to unlock insights from data.</p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Join Course
          </button>
        </div>

        {/* Digital Marketing Card */}
        <div className="border p-6 rounded-lg shadow group transition-transform transform hover:scale-105 hover:shadow-xl w-80 flex-shrink-0">
          <img src="https://via.placeholder.com/300x200" alt="Digital Marketing" className="w-full h-48 object-cover rounded-lg mb-4"/>
          <h4 className="text-xl font-bold mb-2">Digital Marketing</h4>
          <p>Learn to create successful marketing campaigns with SEO, social media, and paid ads strategies.</p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Join Course
          </button>
        </div>

        {/* Mobile App Development Card */}
        <div className="border p-6 rounded-lg shadow group transition-transform transform hover:scale-105 hover:shadow-xl w-80 flex-shrink-0">
          <img src="https://via.placeholder.com/300x200" alt="Mobile App Development" className="w-full h-48 object-cover rounded-lg mb-4"/>
          <h4 className="text-xl font-bold mb-2">Mobile App Development</h4>
          <p>Learn to build mobile applications for Android and iOS using modern frameworks like React Native.</p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Join Course
          </button>
        </div>

        {/* Graphic Design Card */}
        <div className="border p-6 rounded-lg shadow group transition-transform transform hover:scale-105 hover:shadow-xl w-80 flex-shrink-0">
          <img src="https://via.placeholder.com/300x200" alt="Graphic Design" className="w-full h-48 object-cover rounded-lg mb-4"/>
          <h4 className="text-xl font-bold mb-2">Graphic Design</h4>
          <p>Master design principles and tools like Adobe Photoshop and Illustrator to create stunning visuals.</p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Join Course
          </button>
        </div>

        {/* Cybersecurity Card */}
        <div className="border p-6 rounded-lg shadow group transition-transform transform hover:scale-105 hover:shadow-xl w-80 flex-shrink-0">
          <img src="https://via.placeholder.com/300x200" alt="Cybersecurity" className="w-full h-48 object-cover rounded-lg mb-4"/>
          <h4 className="text-xl font-bold mb-2">Cybersecurity</h4>
          <p>Learn to protect networks, systems, and data from digital threats and vulnerabilities.</p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Join Course
          </button>
        </div>

        {/* Artificial Intelligence Card */}
        <div className="border p-6 rounded-lg shadow group transition-transform transform hover:scale-105 hover:shadow-xl w-80 flex-shrink-0">
          <img src="https://via.placeholder.com/300x200" alt="Artificial Intelligence" className="w-full h-48 object-cover rounded-lg mb-4"/>
          <h4 className="text-xl font-bold mb-2">Artificial Intelligence</h4>
          <p>Learn how AI and machine learning are transforming industries and how to apply AI solutions.</p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Join Course
          </button>
        </div>

        {/* Cloud Computing Card */}
        <div className="border p-6 rounded-lg shadow group transition-transform transform hover:scale-105 hover:shadow-xl w-80 flex-shrink-0">
          <img src="https://via.placeholder.com/300x200" alt="Cloud Computing" className="w-full h-48 object-cover rounded-lg mb-4"/>
          <h4 className="text-xl font-bold mb-2">Cloud Computing</h4>
          <p>Understand cloud infrastructure, cloud services, and how to manage and scale cloud solutions.</p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Join Course
          </button>
        </div>

        {/* Business Analytics Card */}
        <div className="border p-6 rounded-lg shadow group transition-transform transform hover:scale-105 hover:shadow-xl w-80 flex-shrink-0">
          <img src="https://via.placeholder.com/300x200" alt="Business Analytics" className="w-full h-48 object-cover rounded-lg mb-4"/>
          <h4 className="text-xl font-bold mb-2">Business Analytics</h4>
          <p>Learn to analyze data and derive business insights to make better decisions and drive success.</p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Join Course
          </button>
        </div>

      </div>

      {/* Left and Right Arrow Buttons */}
      <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-gray-700">
        &#60;
      </button>
      <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-gray-700">
        &#62;
      </button>
    </div>
  </div>
</section>







</>

    )
}
export default Card