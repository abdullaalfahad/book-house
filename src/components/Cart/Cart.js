import React, { useState } from 'react';
import Select from '../Select/Select';
import './Cart.css'

const Cart = ({ selected, chooseAgain }) => {

    const [choose, setChoose] = useState([]);

    const chooseOne = (selected) => {
        const random = Math.floor(Math.random() * selected.length);
        const value = (selected[random]);
        setChoose(value);
        document.getElementsByClassName('random').style.display = 'block';
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
            <div className="random">
                <h4>Selected one:</h4>
                {
                    <Select select={choose}></Select>
                }
            </div>
            <div className="choose-one">
                <button onClick={() => chooseOne(selected)}>Choose one for me</button>
            </div>
            <div className="choose-again">
                <button onClick={chooseAgain}>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;