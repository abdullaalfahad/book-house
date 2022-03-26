import React from 'react';
import './Select.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

const Select = ({ select }) => {
    const { img, name } = select;
    return (
        <div className="select">
            <img src={img} alt="Book" />
            <p>{name}</p>
            <button>
                <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Select;