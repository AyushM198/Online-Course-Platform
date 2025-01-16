import React from "react";

const LearningPlatform = () => {
  return (
    <div className="bg-gray-50 font-poppins">
      {/* Expert Instructors Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Expert Instructors from Around the World
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Instructor Card */}
            {[
              {
                name: "Albert Johnson",
                title: "UX Design Lead",
                description:
                  "15+ years of experience in leading global design teams at Fortune 500 companies.",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlYQvUCSw3WnOVZ_F5dwkmbgdH3jDo-ffEUQ&s",
              },
              {
                name: "Michael Chen",
                title: "Product Designer",
                description:
                  "Former Silicon Valley designer with expertise in product innovation and strategy.",
                img: "https://images.squarespace-cdn.com/content/v1/5ec689480cc22c2d441e152f/1676484746035-71NBQ5PDXFFR65YUP9NW/nlalor-photography-2021-06-17-Jason-Cholewa-Headshot-Web-Sized-1.jpg?format=750w",
              },
              {
                name: "Emma Davis",
                title: "UI/UX Specialist",
                description:
                  "Award-winning designer specializing in user-centered design approaches.",
                img: "https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg?auto=avif,webp&format=jpg&width=944",
              },
            ].map((instructor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src={instructor.img}
                  alt={instructor.name}
                  className="w-20 h-20 mx-auto rounded-full mb-4"
                />
                <h3 className="text-lg font-bold text-gray-800">
                  {instructor.name}
                </h3>
                <p className="text-sm text-purple-600 font-medium">
                  {instructor.title}
                </p>
                <p className="text-gray-600 mt-2">{instructor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive and Hands-On Learning Section */}
      <div className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Interactive and Hands-On Learning
          </h2>
          <ul className="mt-8 space-y-4">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 text-blue-500"
                  >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" />
                    <path
                      d="M9 11l2 2 4-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                ),
                title: "Live Projects",
                description:
                  "Work on real-world projects with actual clients and deadlines.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 text-blue-500"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <path
                      d="M9 10h6M9 14h3"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                ),
                title: "Interactive Sessions",
                description:
                  "Engage in live discussions and collaborative problem-solving.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 text-blue-500"
                  >
                    <path
                      d="M12 6v12M6 12h12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                ),
                title: "1-on-1 Mentoring",
                description:
                  "Personal guidance from industry experts throughout your journey.",
              },
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <div>{feature.icon}</div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img
            src="https://gumlet-blog-content.gumlet.io/learn/content/images/2022/07/Elearning_platform.jpg?w=3840"
            alt="Interactive Learning"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Certifications Section */}
      <div className="bg-blue-50 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Boost Your Career with Our Certification
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-12 h-12 text-blue-500"
                  >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" />
                    <path
                      d="M9 11l2 2 4-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                ),
                title: "Industry-Recognized",
                description:
                  "Our certificates are valued by top employers worldwide.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-12 h-12 text-blue-500"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <path
                      d="M9 10h6M9 14h3"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                ),
                title: "Career Growth",
                description:
                  "90% of our graduates report career advancement within 6 months.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-12 h-12 text-blue-500"
                  >
                    <path
                      d="M6 12h12M12 6v12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                ),
                title: "Network Access",
                description:
                  "Join our alumni network of 10,000+ professionals.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex items-center"
              >
                <div>{benefit.icon}</div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPlatform;