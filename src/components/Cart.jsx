import React from 'react';

const Cart = ({ cart }) => {
    console.log(cart);
    const {category } = cart;
    return (
        <div>
            <h1>Cart showing {cart.length}</h1>
            <p>{category}</p>
        </div>
    );
};

export default Cart;