import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [books, setBooks] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    const addToSelect = (book) => {
        const newAdd = [...selected, book];
        setSelected(newAdd);
    }

    return (
        <div className="shop">
            <div className="book-container">
                {
                    books.map(book => <Book
                        key={book.id}
                        book={book}
                        addToSelect={addToSelect}
                    ></Book>)
                }
            </div>
            <div className="cart-container">
                <Cart selected={selected}></Cart>
            </div>
        </div>
    );
};

export default Shop;