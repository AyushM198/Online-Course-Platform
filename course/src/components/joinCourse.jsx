import React from 'react';

const JoinCourse = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-300">
            <div className="max-w-md w-full bg-gradient-to-br from-gray-800 to-gray-950 p-8 rounded-lg shadow-xl">
            <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
   Welcome to Your Course!
</h1>
                <p className="text-center text-gray-50 mt-4 text-lg">You have successfully joined the course. We're excited to have you on board! Get ready to learn, grow, and achieve your goals.</p>
                <a 
                    href="/course-overview" 
                    className="block w-full mt-8 py-3 text-center bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg text-lg font-semibold shadow-lg transition transform hover:scale-105">
                    Go to Course
                </a>
            </div>
        </div>
    );
};

export default JoinCourse;