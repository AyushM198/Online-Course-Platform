// import React, { useRef } from 'react';
// import './3dSection.css';

// const Interactive3DSection = () => {
//   const containerRef = useRef(null);
//   const imageRef = useRef(null);

//   return (
//     <section className="interactive-3d-section bg-gradient-to-r from-white via-gray-100 to-gray-200 text-gray-800 py-20">
//       <div className="container mx-auto px-6 text-center flex flex-col md:flex-row items-center">

//         {/* Interactive Container */}
//         <div
//           ref={containerRef}
//           className="interactive-container w-96 h-96 bg-white rounded-lg shadow-lg flex items-center justify-center mr-10"
//         >
//           <div
//             className="interactive-element w-full h-full bg-gray-100 rounded-lg overflow-hidden"
//           >
//             <img
//               ref={imageRef}
//               src="/assets/img.jpg" // Ensure this path is correct
//               alt="Interactive"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>

//         {/* Text Section */}
//         <div className="text-right mt-8 md:mt-0 md:ml-10">
//           <h2 className="text-4xl font-bold mb-6">Discover the Future of Learning</h2>
//           <p className="text-lg mb-8">
//             Engage with a dynamic interactive experience that mirrors the engaging nature of our courses.
//           </p>

//           {/* Sub-heading and description */}
//           <h3 className="text-2xl font-semibold mb-4">Learn New Skills Anytime, Anywhere.</h3>
//           <p className="text-lg">
//             Access thousands of online courses from top instructors and industry experts.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Interactive3DSection;


import React, { useRef } from 'react';
import './3dSection.css';

const Interactive3DSection = () => {
  const containerRef = useRef(null);

  return (
    <section className="interactive-3d-section bg-gradient-to-r from-white via-gray-100 to-gray-200 text-gray-800 py-20">
      <div className="container mx-auto px-6 text-center flex flex-col md:flex-row items-center">

        {/* Interactive Container with background image */}
        <div
          ref={containerRef}
          className="interactive-container w-96 h-96 bg-white rounded-lg shadow-lg flex items-center justify-center mr-10 relative"
          style={{
            backgroundImage: 'url(/assets/white.jpg)',  // Background image
            backgroundSize: 'cover',  // Ensures the image covers the entire container
            backgroundPosition: 'center',  // Centers the image
            backgroundRepeat: 'no-repeat',  // Prevents the image from repeating
          }}
        >
          {/* Overlay image on top of the background */}
          <img
            src="/assets/study.png"  // Path to your overlay image
            alt="Overlay"
            className="overlay-image absolute w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-right mt-8 md:mt-0 md:ml-10">
          <h2 className="text-4xl font-bold mb-6">Discover the Future of Learning</h2>
          <p className="text-lg mb-8">
            Engage with a dynamic interactive experience that mirrors the engaging nature of our courses.
          </p>

          {/* Sub-heading and description */}
          <h3 className="text-2xl font-semibold mb-4">Learn New Skills Anytime, Anywhere.</h3>
          <p className="text-lg">
            Access thousands of online courses from top instructors and industry experts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Interactive3DSection;
