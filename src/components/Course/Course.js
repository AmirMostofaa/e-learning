import React from 'react';
import './Course.css';

const Course = (props) => {

    const {course_name, price, img } = props.courses;
    

    return (
        <div>
            <div className="card text-center">
                <img src={img} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{course_name}</h5>
                    <h5 className="card-title">{price}</h5>
                    <a href="" className="btn btn-primary" onClick={() => props.handleEnroll(props.courses)}>Enroll Now</a>
                </div>
            </div>
        </div>
    );
};

export default Course;