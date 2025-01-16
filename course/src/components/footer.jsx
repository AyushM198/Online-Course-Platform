import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Logo Section */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h2 className="text-2xl font-bold mb-2">A2Z Learning</h2>
            <p className="text-gray-400">
              Empowering your learning journey with quality online courses.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/coursePage"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Short Contact Details Section */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <ul>
              <li className="text-gray-400 mb-2">
                <strong>Email:</strong> contact@a2zlearning.com
              </li>
              <li className="text-gray-400 mb-2">
                <strong>Phone:</strong> +1 234 567 890
              </li>
              <li className="text-gray-400">
                <strong>Address:</strong> 123 Learning St, Suite 456, City, Country
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2025 A2Z Learning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;