import React from 'react';
import Card from './card'
import Interactive3DSection from './3Dinteractive';
import Courses from './xyz';
import Testimonials from './reviewsection'; 
import LearningPlatform from './extra';


const LandingPage = () => {
  return (
    <div className="bg-gray-100 font-poppins  ">
    



 {/* Hero Section */}
<section
  className="bg-white min-h-96 text-center flex items-center justify-center"
  style={{
    backgroundImage: "url('https://wallpapers.com/images/hd/black-gradient-background-pv1chy1f74953f5z.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-poppins font-bold mb-6 text-white">Learn New Skills Anytime, Anywhere</h2>
    <p className="text-lg mb-8 text-white">Access thousands of online courses from top instructors and industry experts.</p>
  </div>
</section>


<Courses /> 
<Interactive3DSection />
<Testimonials /> 
<LearningPlatform />


      
    </div>

  );
};

export default LandingPage;