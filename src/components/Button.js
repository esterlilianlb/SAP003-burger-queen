import React from 'react';


function Button(props) {
    return(
        <button
        className={props.className}
        id={props.id}
        onClick={props.handleClick}
        text={props.text}
        >
        </button>
    )
}
export default Button;