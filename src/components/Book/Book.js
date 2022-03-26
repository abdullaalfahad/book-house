import React from 'react';
import './Book.css'

const Book = (props) => {
    const { book, addToSelect } = props;
    const { img, name, price } = book;
    return (
        <div className="book">
            <img src={img} alt="Book" />
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <button onClick={() => addToSelect(book)} className="cart-btn">Add To Cart</button>
        </div>
    );
};

export default Book;