import React, { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "A2Z Learning is the top choice for online courses, empowering learners worldwide with the skills to succeed in their careers.",
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_dAgZGif9d0sed_FrNZ4wB1jhaiTrKm7gg&s",
      author: "Ravi Kumar",
      position: "Co-Founder, CTO at TCS",
      responses: "45,000+ learners worldwide",
      linkText: "Explore Web Development Courses",
      linkUrl: "#",
    },
    {
      text: "A2Z Learning provided me with the guidance and resources to build our dream project from scratch.",
      profileImage:
        "https://media.licdn.com/dms/image/D4D03AQEgjhpGz_dmbg/profile-displayphoto-shrink_200_200/0/1671951164113?e=2147483647&v=beta&t=7Owpzh52DpYDKSXeDc0gDYZcqvJEYpG_2cysmB1XgUE",
      author: "Priya Sharma",
      position: "Co-Founder, CTO at Infosys",
      responses: "45,000+ learners worldwide",
      linkText: "Discover Advanced iOS & Swift Courses",
      linkUrl: "#",
    },
    {
      text: "A2Z Learning's platform gave me the confidence and knowledge I needed to transition into a new role seamlessly.",
      profileImage:
        "https://www.corporatephotographerslondon.com/wp-content/uploads/2023/02/LinkedIn_Profile_Photo.jpg",
      author: "Vikram Yadav",
      position: "Partner Account Manager at Amazon Web Services",
      responses: "45,000+ learners worldwide",
      linkText: "Master AWS Cloud Technologies",
      linkUrl: "#",
    },
    {
      text: "With A2Z Learning, our employees gained essential skills to merge technology expertise with leadership, driving career growth.",
      profileImage:
        "https://media.licdn.com/dms/image/v2/D5603AQEIvFhbChPxqw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719600491995?e=2147483647&v=beta&t=wWIJ7qv0vaj-YzA60mkeMCkleI_qKBPNPSHk2IaagG4",
      author: "Sonia Mehta",
      position: "Head of Capability Development, North America at Publicis Sapient",
      responses: "45,000+ learners worldwide",
      linkText: "Read Full Success Story",
      linkUrl: "#",
    },
    {
      text: "A2Z Learning helped me achieve my dream of becoming a data scientist.",
      profileImage:
        "https://png.pngtree.com/png-vector/20241019/ourmid/pngtree-21-and-ready-for-success-a-professional-linkedin-profile-png-image_14113833.png",
      author: "Ankit Sharma",
      position: "Data Scientist at Google",
      responses: "30,000+ learners worldwide",
      linkText: "Learn Data Science",
      linkUrl: "#",
    },
    {
      text: "Thanks to A2Z Learning, I mastered the art of digital marketing!",
      profileImage:
        "https://media.licdn.com/dms/image/v2/D4D03AQGRIvrfjtL2Zg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699024098482?e=2147483647&v=beta&t=bAZIJPeMibBuepfy6gcvCk_Vf4O5xC07hKcoMNQ3l1o",
      author: "Neha Gupta",
      position: "Digital Marketer at Meta",
      responses: "50,000+ learners worldwide",
      linkText: "Start Digital Marketing Today",
      linkUrl: "#",
    },
    {
      text: "The quality of courses at A2Z Learning is unmatched. It transformed my perspective on professional growth!",
      profileImage:
        "https://png.pngtree.com/png-vector/20241019/ourmid/pngtree-aspiring-leader-linkedin-profile-photo-of-a-21-year-old-indian-png-image_14113872.png",
      author: "Rahul Joshi",
      position: "Project Manager at Microsoft",
      responses: "40,000+ learners worldwide",
      linkText: "Explore Project Management Courses",
      linkUrl: "#",
    },
    {
      text: "I never thought online courses could be so engaging. A2Z Learning is a game-changer!",
      profileImage:
        "https://png.pngtree.com/png-vector/20241019/ourmid/pngtree-fresh-focused-and-professional-a-21-year-old-s-linkedin-headshot-png-image_14113874.png",
      author: "Amit Kumar",
      position: "Software Engineer at Tesla",
      responses: "60,000+ learners worldwide",
      linkText: "Start Your Engineering Journey",
      linkUrl: "#",
    },
    {
      text: "Learning with A2Z Learning was a life-changing experience for me.",
      profileImage:
        "https://png.pngtree.com/png-vector/20241016/ourmid/pngtree-young-professional-on-the-rise-linkedin-profile-of-a-21-year-png-image_14098690.png",
      author: "Sakshi Deshmukh",
      position: "AI Specialist at OpenAI",
      responses: "35,000+ learners worldwide",
      linkText: "Explore AI and Machine Learning",
      linkUrl: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 4 : prevIndex - 4
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= testimonials.length ? 0 : prevIndex + 4
    );
  };

  return (
    <section className="bg-gray-50 py-14 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Explore the Achievements of Our Successful Learners
        </h2>
        <div className="relative">
          <div className="flex overflow-x-auto space-x-8">
            {testimonials.map((testimonial, index) => (
              <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex-none w-64"
              style={{
                border: "4px solid",
                borderImage: "linear-gradient(to right, #870404, #080400) 1",
              }}
            >
            
                <div className="flex flex-col items-center text-center mb-4">
                  {testimonial.profileImage && (
                    <img
                      src={testimonial.profileImage}
                      alt="Profile"
                      className="h-14 w-14 rounded-full mb-4 border-2 border-orange-600"
                    />
                  )}
                  <blockquote className="italic text-black mb-4 text-sm">
                    {testimonial.text}
                  </blockquote>
                  <p className="text-md text-gray-600 font-semibold mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-gray-700 mb-2">{testimonial.position}</p>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400 mt-auto">
                  <p>{testimonial.responses}</p>
                  <a
                    href={testimonial.linkUrl}
                    className="text-orange-600 font-medium hover:underline"
                  >
                    {testimonial.linkText}
                  </a>
                </div>
              </div>
            ))}

          </div>
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-400 to-orange-700 text-white p-3 rounded-full shadow-lg hover:scale-110 focus:outline-none transition-transform duration-200"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-400 to-orange-700 text-white p-3 rounded-full shadow-lg hover:scale-110 focus:outline-none transition-transform duration-200"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;