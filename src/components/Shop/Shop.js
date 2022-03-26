import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="shop">
            <div className="book-container">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;