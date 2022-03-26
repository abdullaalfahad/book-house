import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className="question">
            <h4>Q1: How react works?</h4>
            <p>Answer: React, at its heart, essentially maintains a tree for you. On the nodes, this tree can perform efficient diff computations.

                Consider your HTML code to be a tree. That is, in fact, how the browser handles your DOM (your rendered HTML on the browser). React allows you to essentially re-construct your DOM in JavaScript and only push the changes that have actually occurred to the DOM.</p>
            <h4>Q2: State Vs Props.</h4>
            <p>Answer: State-The state is an updatable structure that can vary over time and is used to store data or information about the component. A state change can occur as a result of a user action or a system event. It is the react component's brain, determining the component's behavior and how it will render. A state should be as straightforward as feasible. It represents the local status or information of the component. It can only be accessed or modified from within the component or directly by the component.<br></br>
                Props-Props are components that can only be read. It's an object that stores the value of a tag's attributes and functions similarly to HTML attributes. It allows data to be passed from one component to another. It's comparable to function arguments, and it can be supplied to the component in the same manner that function arguments can. Because props are immutable, we can't change them from within the component.</p>
        </div>
    );
};

export default Question;