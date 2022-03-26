import React from 'react';
import './Select.css'

const Select = ({ select }) => {
    const { img, name } = select;
    return (
        <div className="select">
            <img src={img} alt="Book" />
            <p>{name}</p>
        </div>
    );
};

export default Select;