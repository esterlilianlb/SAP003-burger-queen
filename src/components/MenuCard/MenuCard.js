import React from 'react';

function MenuCard(props) {
    return(
        <div
        onClick={props.handleClick}
        >
            {props.title}
            {props.valor}
        </div>
    )
}

export default MenuCard;