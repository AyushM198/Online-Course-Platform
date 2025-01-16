import React from 'react';

const CourseCard = ({ course }) => {
    return (
        <div className="course-card">
            <h3>{course.name}</h3>
            <p>{course.type}</p>
            <div className="price">${course.price}</div>
        </div>
    );
};

export default CourseCard;
