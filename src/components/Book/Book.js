import React from 'react';
import './Book.css'

const Book = (props) => {
    const { img, name, price } = props.book;
    return (
        <div className="book">
            <img src={img} alt="Book" />
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <button className="cart-btn">Add To Cart</button>
        </div>
    );
};

export default Book;