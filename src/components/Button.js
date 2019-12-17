import React from 'react';

const Button = (props) => (
    <button
    className={props.className}
    onClick={props.onClick}
    >
    {props.title}
    </button>
)
export default Button;