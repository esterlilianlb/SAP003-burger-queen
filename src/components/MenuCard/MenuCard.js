import React from 'react';
import './MenuCard.css';

function MenuCard(props) {
    return(
        <div
        className={"menu-card"}
        onClick={props.handleClick}
        >
            {props.title}
            {props.valor}
        </div>
    )
}

export default MenuCard;