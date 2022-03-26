import React from 'react';
import Select from '../Select/Select';
import './Cart.css'

const Cart = ({ selected }) => {
    return (
        <div className="cart">
            <h2>Selected Books</h2>
            {
                selected.map(select => <Select
                    key={select.id}
                    select={select}
                ></Select>)
            }
        </div>
    );
};

export default Cart;