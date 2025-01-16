import React from 'react';

const CourseOverview = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 p-6">
        
        {/* Overview Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">JavaScript Course Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            JavaScript is the world's most widely used programming language, powering the behavior and interactivity of modern web pages. Whether you're a complete beginner or an experienced developer, this tutorial will take you from basic concepts to advanced features of JavaScript. JavaScript is not just a language for the web anymore; it's used for server-side development, mobile apps, and even machine learning!
          </p>
          <img
            src="https://www.nameboy.com/wp-content/uploads/2022/06/best-online-course-platform.png"
            alt="Code example"
            className="w-full max-w-5xl h-auto rounded-lg shadow-lg mx-auto"
          />
        </section>

        {/* Why Learn JavaScript */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Why Learn JavaScript?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            JavaScript is one of the foundational technologies for web development, alongside HTML and CSS. Together, they define the structure, style, and functionality of web pages. Learning JavaScript gives you the ability to create dynamic, engaging, and interactive user experiences. It is an essential skill for any web developer.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Create interactive websites:</strong> Build websites that respond to user interactions, such as form submissions, button clicks, or real-time updates.
            </li>
            <li>
              <strong>Build web applications:</strong> Develop modern, single-page applications (SPAs) using frameworks like React, Angular, or Vue.js.
            </li>
            <li>
              <strong>Work with front-end frameworks and back-end environments:</strong> JavaScript powers back-end development through Node.js, making it a versatile choice for full-stack development.
            </li>
          </ul>
        </section>

        {/* Learn by Doing */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Learn by Doing</h2>
          <p className="text-gray-700 leading-relaxed">
            The best way to learn JavaScript is by coding. This course focuses on hands-on learning, providing you with plenty of opportunities to practice. Our "Try-it-Yourself" editor allows you to write, test, and debug your code directly in the browser. You'll also work on small projects that gradually increase in complexity, helping you apply your knowledge to real-world scenarios.
          </p>
          <img
            src="https://academylms.net/wp-content/uploads/2022/09/Structure-of-Online-Courses.png"
            alt="JavaScript concept"
            className="w-full max-w-5xl h-auto rounded-lg shadow-lg mx-auto"
          />
        </section>

        {/* Comprehensive Coverage */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Comprehensive Coverage</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This tutorial ensures you gain a complete understanding of JavaScript, covering everything from basic concepts to advanced techniques. Whether you're just starting out or brushing up on advanced topics, this course has something for everyone.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Variables, Data Types, and Operators:</strong> Learn how to declare variables, work with different data types, and use operators to manipulate data.
            </li>
            <li>
              <strong>Functions, Objects, and Arrays:</strong> Understand how to create reusable functions, work with objects, and manage collections of data using arrays.
            </li>
            <li>
              <strong>DOM Manipulation and Events:</strong> Discover how to interact with the Document Object Model (DOM) to dynamically update the content and structure of your web pages.
            </li>
            <li>
              <strong>Promises, Async/Await, and Error Handling:</strong> Master asynchronous programming to handle real-world scenarios like API calls and error management.
            </li>
            <li>
              <strong>Advanced Topics:</strong> Dive into closures, prototypes, modules, and other advanced concepts that make JavaScript a powerful and flexible language.
            </li>
          </ul>
        </section>

        {/* Interactive Exercises */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Interactive Exercises</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Practice is key to mastering JavaScript. This course includes interactive exercises at the end of each chapter, helping you solidify your understanding. You'll apply what you've learned to solve problems, write your own code, and debug issues. By the end of the course, you'll have a portfolio of small projects and exercises showcasing your skills.
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-lg overflow-x-auto">
{`const websites = [
  {name: 'JavaScript', isActive: true, members: 789},
  {name: 'React', isActive: true, members: 580},
];

const activeSites = websites.filter(w => w.isActive).map(w => w.name);
console.log(activeSites); // Output: ["JavaScript", "React"]`}
          </pre>
        </section>

        {/* Tools and Resources */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Tools and Resources</h2>
          <p className="text-gray-700 leading-relaxed">
            As part of this course, you'll learn to use popular tools and resources that will make coding in JavaScript easier and more efficient. These include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Code Editors:</strong> Tools like Visual Studio Code, Sublime Text, and WebStorm to streamline your coding experience.
            </li>
            <li>
              <strong>Browser Developer Tools:</strong> Debugging and testing JavaScript code directly in your browser.
            </li>
            <li>
              <strong>Online Platforms:</strong> Practice platforms like CodePen, JSFiddle, and LeetCode to sharpen your skills.
            </li>
          </ul>
        </section>

        {/* Career Opportunities */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Career Opportunities</h2>
          <p className="text-gray-700 leading-relaxed">
            JavaScript opens up numerous career paths in technology, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Front-end Developer: Create visually appealing and interactive web pages.
            </li>
            <li>
              Back-end Developer: Build server-side applications using frameworks like Node.js.
            </li>
            <li>
              Full-stack Developer: Combine front-end and back-end skills for complete application development.
            </li>
            <li>
              Specialized Roles: Explore careers in game development, machine learning, or IoT using JavaScript.
            </li>
          </ul>
        </section>

        {/* Community and Support */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Community and Support</h2>
          <p className="text-gray-700 leading-relaxed">
            JavaScript has a vibrant and active community. From online forums like Stack Overflow to local meetups and conferences, you'll find countless resources and people ready to help. Being part of this community ensures continuous learning and support as you grow in your career.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CourseOverview;