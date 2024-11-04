import React from 'react';

const Cart = ({ cart }) => {
    const {category } = cart;
    console.log(cart);
    return (
        <div>
            <h1>Cart showing {category}</h1>
        </div>
    );
};

export default Cart;