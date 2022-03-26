import React from 'react';
import Select from '../Select/Select';
import './Cart.css'

const Cart = ({ selected }) => {

    const chooseOne = (selected) => {
        // console.log(selected);
        const random = Math.floor(Math.random() * selected.length);
        console.log(selected[random])
    }

    return (
        <div className="cart">
            <h2>Selected Books</h2>
            {
                selected.map(select => <Select
                    key={select.id}
                    select={select}
                ></Select>)
            }
            <div>

            </div>
            <div className="choose-one">
                <button onClick={() => chooseOne(selected)}>Choose one for me</button>
            </div>
            <div className="choose-again">
                <button>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;