import React, { useEffect, useState } from 'react';
import './Content.css';
import data from '../../data/onlineCourse.json';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const Content = () => {

    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCourses(data);
    });

    const handleEnroll = (courses) => {
        const newCart = [...cart, courses];
        setCart(newCart);
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-sm-8 col-8">
                    <div className="course-area">

                    <ul>
                        {
                            courses.map(courses => <Course 
                                courses={courses}
                                handleEnroll={handleEnroll}
                                ></Course>)
                        }
                    </ul>

                        
                    </div>
            
                </div>
                <div className="col-md-4 col-sm-4 col-4">
                    <div className="cart-area">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;