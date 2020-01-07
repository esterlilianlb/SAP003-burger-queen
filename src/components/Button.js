import React from 'react';
import './Button.css';

function Button(props) {
    return(
        <button
        className={props.className}
        id={props.id}
        onClick={props.handleClick}
        key={props.key}
        >
        {props.title}
        {props.valor}
        </button>
    )
}
export default Button;