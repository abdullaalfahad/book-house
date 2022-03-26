import React from 'react';
import './Book.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Book = (props) => {
    const { book, addToSelect } = props;
    const { img, name, price } = book;
    return (
        <div className="book">
            <img src={img} alt="Book" />
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <button onClick={() => addToSelect(book)} className="cart-btn">
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                Add To Cart
            </button>
        </div>
    );
};

export default Book;