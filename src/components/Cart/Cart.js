import React from 'react';

const Cart = (props) => {

    const cart = props.cart;
    const total = cart.reduce((total, courses) => total + courses.price, 0);

    return (
        
        <div className="card text-center">
            <div className="card-body">
                <h6 className="card-title">Course Enrolled: {cart.length}</h6>
                <br></br>
                <h6 className="card-title">Course Prices: {total}</h6>
                
            </div>
        </div>
            
    );
};

export default Cart;